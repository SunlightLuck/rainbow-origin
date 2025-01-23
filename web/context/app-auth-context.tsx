import { getCurrentUser, requestMessage, verifySignature } from "@/utils/api";
import { setAuthToken } from "@/utils/setAuthToken";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAccount } from "wagmi";
import { signMessage } from "@wagmi/core";
import { config } from "./web3-auth-context";

export type IUser = {
  walletAddress: string;
};

export interface IAppContext {
  loading: boolean;
  user: IUser | null;
}

export interface IAppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider = ({ children }: IAppProviderProps) => {
  const { isConnected, address } = useAccount();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!isConnected || !address) {
      setAuthToken(null);
      setUser(null);
      // Redirect to login
    } else {
      if (localStorage.getItem("authToken")) {
        // Token
        setAuthToken(localStorage.getItem("authToken"));

        // Get User Info
        (async () => {
          const _user = await getCurrentUser();
          setUser(_user);
        })();
      } else if (localStorage.getItem("signature")) {
        // Refresh auth token with signature
        (async () => {
          const _token = await verifySignature(
            address,
            localStorage.getItem("signature")!
          );

          if (_token) {
            // Save auth token
            setAuthToken(_token);
            const _user = await getCurrentUser();
            setUser(_user);
          }
        })();
      } else {
        // Sign message and Verify signature, get auth token; New User
        (async () => {
          const _msg = await requestMessage(address);

          if (!_msg) return; // To Do: redirect to root, error message handler (Optional)

          // Sign the message
          const _sig = await signMessage(config, { message: _msg });

          if (!_sig) return; // To Do: redirect to root, error message handler (Optional)

          // Store signature in localStorage (Optional)
          localStorage.setItem("signature", _sig);

          // Get auth token
          const _token = await verifySignature(address, _sig);

          if (_token) {
            // Save auth token
            setAuthToken(_token);
            const _user = await getCurrentUser();
            setUser(_user);
          }
        })();
      }
    }
  }, [isConnected, address]);

  return (
    <AppContext.Provider
      value={{
        loading: false,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
