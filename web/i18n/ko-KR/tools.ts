const translation = {
  title: '도구',
  createCustomTool: '커스텀 도구 만들기',
  customToolTip: 'Dify 커스텀 도구에 대해 더 알아보기',
  type: {
    all: '모두',
    builtIn: '내장',
    custom: '커스텀',
    workflow: '워크플로우',
  },
  contribute: {
    line1: '저는 Dify에',
    line2: '도구를 기여하는데 관심이 있습니다.',
    viewGuide: '가이드 보기',
  },
  author: '저자',
  auth: {
    unauthorized: '인증되지 않음',
    authorized: '인증됨',
    setup: '사용을 위한 인증 설정',
    setupModalTitle: '인증 설정',
    setupModalTitleDescription: '자격 증명을 구성한 후에 워크스페이스의 모든 멤버가 이 도구를 사용하여 애플리케이션을 조작할 수 있습니다.',
  },
  includeToolNum: '{{num}}개의 도구가 포함되어 있습니다',
  addTool: '도구 추가',
  addToolModal: {
    type: '타입',
    category: '카테고리',
    add: '추가',
    added: '추가됨',
    manageInTools: '도구에서 관리',
    emptyTitle: '사용 가능한 워크플로우 도구 없음',
    emptyTip: '"워크플로우 -> 도구로 등록하기"로 이동',
    emptyTipCustom: '사용자 지정 도구 만들기',
    emptyTitleCustom: '사용 가능한 사용자 지정 도구가 없습니다.',
  },
  createTool: {
    title: '커스텀 도구 만들기',
    editAction: '설정',
    editTitle: '커스텀 도구 편집',
    name: '이름',
    toolNamePlaceHolder: '도구 이름을 입력하세요',
    nameForToolCall: '도구 호출 이름',
    nameForToolCallPlaceHolder: 'getCurrentWeather, list_pets 과 같이, 기계 인지를 위해 사용됩니다.',
    nameForToolCallTip: '숫자와 문자, 밑줄만 지원합니다.',
    description: '설명',
    descriptionPlaceholder: '도구의 목적을 설명합니다. 예시로, 특정 지역의 온도 가져오기',
    schema: '스키마',
    schemaPlaceHolder: '여기에 OpenAPI 스키마를 입력하세요',
    viewSchemaSpec: 'OpenAPI-Swagger 명세 보기',
    importFromUrl: 'URL에서 가져오기',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '유효한 URL을 입력하세요',
    examples: '예시',
    exampleOptions: {
      json: '날씨 (JSON)',
      yaml: '펫 스토어 (YAML)',
      blankTemplate: '빈 템플릿',
    },
    availableTools: {
      title: '사용 가능한 도구',
      name: '이름',
      description: '설명',
      method: '메소드',
      path: '경로',
      action: '동작',
      test: '테스트',
    },
    authMethod: {
      title: '인증 방법',
      type: '인증 유형',
      keyTooltip: 'HTTP 헤더 키입니다. 생각이 없으면 "Authorization"으로 남겨둘 수 있습니다. 또는 사용자 정의 값을 설정할 수 있습니다.',
      types: {
        none: '없음',
        api_key: 'API 키',
        apiKeyPlaceholder: 'API 키의 HTTP 헤더 이름',
        apiValuePlaceholder: 'API 키를 입력하세요',
      },
      key: '키',
      value: '값',
    },
    authHeaderPrefix: {
      title: '인증 유형',
      types: {
        basic: '베이직',
        bearer: '베어러',
        custom: '사용자 정의',
      },
    },
    privacyPolicy: '개인정보 처리방침',
    privacyPolicyPlaceholder: '개인정보 처리방침을 입력하세요',
    toolInput: {
      title: '도구 입력',
      name: '이름',
      required: '필요사항',
      method: '방식',
      methodSetting: '설정',
      methodSettingTip: '도구 설정에서 사용자가 기입',
      methodParameter: '파라미터',
      methodParameterTip: '추론 중에 LLM이 기입',
      label: '태그',
      labelPlaceholder: '태그를 선택하세요.(선택사항)',
      description: '설명',
      descriptionPlaceholder: '파라미터의 의도를 설명하세요.',
    },
    customDisclaimer: '사용자 정의 권리 포기 문구',
    customDisclaimerPlaceholder: '사용자 정의 권리 포기 문구를 입력해주세요.',
    confirmTitle: '저장하시겠습니까?',
    confirmTip: '이 도구를 사용하는 앱은 영향을 받습니다.',
    deleteToolConfirmTitle: '이 도구를 삭제하시겠습니까?',
    deleteToolConfirmContent: '이 도구를 삭제하면 되돌릴 수 없습니다. 사용자는 더 이상 당신의 도구에 액세스할 수 없습니다.',
  },
  test: {
    title: '테스트',
    parametersValue: '파라미터 및 값',
    parameters: '파라미터',
    value: '값',
    testResult: '테스트 결과',
    testResultPlaceholder: '테스트 결과가 여기에 표시됩니다',
  },
  thought: {
    using: '사용 중',
    used: '사용됨',
    requestTitle: '요청',
    responseTitle: '응답',
  },
  setBuiltInTools: {
    info: '정보',
    setting: '설정',
    toolDescription: '도구 설명',
    parameters: '파라미터',
    string: '문자열',
    number: '숫자',
    required: '필수',
    infoAndSetting: '정보 및 설정',
  },
  noCustomTool: {
    title: '커스텀 도구가 없습니다!',
    content: 'AI 앱을 구축하기 위한 커스텀 도구를 여기서 추가 및 관리합니다.',
    createTool: '도구 만들기',
  },
  noSearchRes: {
    title: '죄송합니다. 결과가 없습니다!',
    content: '검색 결과가 없습니다.',
    reset: '검색 초기화',
  },
  builtInPromptTitle: '프롬프트',
  toolRemoved: '도구가 제거되었습니다',
  notAuthorized: '권한이 없습니다',
  howToGet: '획득 방법',
  openInStudio: '스튜디오에서 열기',
  toolNameUsageTip: 'Agent 추리와 프롬프트를 위한 도구 호출 이름',
}

export default translation