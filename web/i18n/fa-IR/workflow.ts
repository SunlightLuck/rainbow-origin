const translation = {
  common: {
    undo: 'بازگشت',
    redo: 'پیشرفت',
    editing: 'ویرایش',
    autoSaved: 'ذخیره خودکار',
    unpublished: 'منتشر نشده',
    published: 'منتشر شده',
    publish: 'انتشار',
    update: 'به‌روزرسانی',
    run: 'اجرا',
    running: 'در حال اجرا',
    inRunMode: 'در حالت اجرا',
    inPreview: 'در پیش‌نمایش',
    inPreviewMode: 'در حالت پیش‌نمایش',
    preview: 'پیش‌نمایش',
    viewRunHistory: 'مشاهده تاریخچه اجرا',
    runHistory: 'تاریخچه اجرا',
    goBackToEdit: 'بازگشت به ویرایشگر',
    conversationLog: 'گزارش مکالمات',
    features: 'ویژگی‌ها',
    debugAndPreview: 'پیش‌نمایش',
    restart: 'راه‌اندازی مجدد',
    currentDraft: 'پیش‌نویس فعلی',
    currentDraftUnpublished: 'پیش‌نویس فعلی منتشر نشده',
    latestPublished: 'آخرین نسخه منتشر شده',
    publishedAt: 'منتشر شده',
    restore: 'بازیابی',
    runApp: 'اجرای اپلیکیشن',
    batchRunApp: 'اجرای دسته‌ای اپلیکیشن',
    accessAPIReference: 'دسترسی به مستندات API',
    embedIntoSite: 'درج در سایت',
    addTitle: 'افزودن عنوان...',
    addDescription: 'افزودن توضیحات...',
    noVar: 'هیچ متغیری',
    searchVar: 'جستجوی متغیر',
    variableNamePlaceholder: 'نام متغیر',
    setVarValuePlaceholder: 'تنظیم متغیر',
    needConnectTip: 'این مرحله به هیچ چیزی متصل نیست',
    maxTreeDepth: 'حداکثر عمق {{depth}} نود در هر شاخه',
    needEndNode: 'بلوک پایان باید اضافه شود',
    needAnswerNode: 'بلوک پاسخ باید اضافه شود',
    workflowProcess: 'فرآیند جریان کار',
    notRunning: 'هنوز در حال اجرا نیست',
    previewPlaceholder: 'محتوا را در کادر زیر وارد کنید تا اشکال‌زدایی چت‌بات را شروع کنید',
    effectVarConfirm: {
      title: 'حذف متغیر',
      content: 'متغیر در نودهای دیگر استفاده شده است. آیا همچنان می‌خواهید آن را حذف کنید؟',
    },
    insertVarTip: 'برای درج سریع کلید \'/\' را فشار دهید',
    processData: 'پردازش داده‌ها',
    input: 'ورودی',
    output: 'خروجی',
    jinjaEditorPlaceholder: 'برای درج متغیر \'/\' یا \'{\' را تایپ کنید',
    viewOnly: 'فقط مشاهده',
    showRunHistory: 'نمایش تاریخچه اجرا',
    enableJinja: 'فعال‌سازی پشتیبانی از الگوهای Jinja',
    learnMore: 'اطلاعات بیشتر',
    copy: 'کپی',
    duplicate: 'تکرار',
    addBlock: 'افزودن بلوک',
    pasteHere: 'چسباندن اینجا',
    pointerMode: 'حالت اشاره‌گر',
    handMode: 'حالت دست',
    model: 'مدل',
    workflowAsTool: 'جریان کار به عنوان ابزار',
    configureRequired: 'پیکربندی مورد نیاز',
    configure: 'پیکربندی',
    manageInTools: 'مدیریت در ابزارها',
    workflowAsToolTip: 'پیکربندی ابزار پس از به‌روزرسانی جریان کار مورد نیاز است.',
    viewDetailInTracingPanel: 'مشاهده جزئیات',
    syncingData: 'همگام‌سازی داده‌ها، فقط چند ثانیه',
    importDSL: 'وارد کردن DSL',
    importDSLTip: 'پیش‌نویس فعلی بر روی هم نوشته خواهد شد. قبل از وارد کردن، جریان کار را به عنوان نسخه پشتیبان صادر کنید.',
    backupCurrentDraft: 'پشتیبان‌گیری از پیش‌نویس فعلی',
    chooseDSL: 'انتخاب فایل DSL(yml)',
    overwriteAndImport: 'بازنویسی و وارد کردن',
    importFailure: 'خطا در وارد کردن',
    importSuccess: 'وارد کردن موفقیت‌آمیز',
    parallelTip: {
      click: {
        title: 'کلیک کنید',
        desc: 'اضافه کردن',
      },
      drag: {
        desc: 'برای اتصال',
        title: 'کشیدن',
      },
      depthLimit: 'حد لایه تودرتو موازی لایه های {{num}}',
      limit: 'موازی سازی به شاخه های {{num}} محدود می شود.',
    },
    disconnect: 'قطع',
    jumpToNode: 'پرش به این گره',
    parallelRun: 'اجرای موازی',
    addParallelNode: 'افزودن گره موازی',
    parallel: 'موازی',
    branch: 'شاخه',
    featuresDocLink: 'بیشتر بدانید',
    featuresDescription: 'بهبود تجربه کاربری برنامه وب',
    ImageUploadLegacyTip: 'اکنون می توانید متغیرهای نوع فایل را در فرم شروع ایجاد کنید. ما دیگر از ویژگی آپلود تصویر در آینده پشتیبانی نخواهیم کرد.',
    fileUploadTip: 'ویژگی های آپلود تصویر برای آپلود فایل ارتقا یافته است.',
    importWarning: 'احتیاط',
    importWarningDetails: 'تفاوت نسخه DSL ممکن است بر ویژگی های خاصی تأثیر بگذارد',
    openInExplore: 'باز کردن در کاوش',
    onFailure: 'در مورد شکست',
    addFailureBranch: 'افزودن برنچ Fail',
    noHistory: 'بدون تاریخچه',
    loadMore: 'بارگذاری گردش کار بیشتر',
  },
  env: {
    envPanelTitle: 'متغیرهای محیطی',
    envDescription: 'متغیرهای محیطی می‌توانند برای ذخیره اطلاعات خصوصی و اعتبارنامه‌ها استفاده شوند. آنها فقط خواندنی هستند و می‌توانند در حین صادر کردن از فایل DSL جدا شوند.',
    envPanelButton: 'افزودن متغیر',
    modal: {
      title: 'افزودن متغیر محیطی',
      editTitle: 'ویرایش متغیر محیطی',
      type: 'نوع',
      name: 'نام',
      namePlaceholder: 'نام متغیر',
      value: 'مقدار',
      valuePlaceholder: 'مقدار متغیر',
      secretTip: 'برای تعریف اطلاعات حساس یا داده‌ها، با تنظیمات DSL برای جلوگیری از نشت پیکربندی شده است.',
    },
    export: {
      title: 'آیا متغیرهای محیطی مخفی را صادر کنید؟',
      checkbox: 'صادر کردن مقادیر مخفی',
      ignore: 'صادر کردن DSL',
      export: 'صادر کردن DSL با مقادیر مخفی',
    },
  },
  chatVariable: {
    panelTitle: 'متغیرهای مکالمه',
    panelDescription: 'متغیرهای مکالمه برای ذخیره اطلاعات تعاملی که LLM نیاز به یادآوری دارد استفاده می‌شوند، از جمله تاریخچه مکالمه، فایل‌های آپلود شده و ترجیحات کاربر. آنها قابل خواندن و نوشتن هستند.',
    docLink: 'برای اطلاعات بیشتر به مستندات ما مراجعه کنید.',
    button: 'افزودن متغیر',
    modal: {
      title: 'افزودن متغیر مکالمه',
      editTitle: 'ویرایش متغیر مکالمه',
      name: 'نام',
      namePlaceholder: 'نام متغیر',
      type: 'نوع',
      value: 'مقدار پیش‌فرض',
      valuePlaceholder: 'مقدار پیش‌فرض، برای عدم تنظیم خالی بگذارید',
      description: 'توضیحات',
      descriptionPlaceholder: 'متغیر را توصیف کنید',
      editInJSON: 'ویرایش در JSON',
      oneByOne: 'افزودن یکی یکی',
      editInForm: 'ویرایش در فرم',
      arrayValue: 'مقدار',
      addArrayValue: 'افزودن مقدار',
      objectKey: 'کلید',
      objectType: 'نوع',
      objectValue: 'مقدار پیش‌فرض',
    },
    storedContent: 'محتوای ذخیره شده',
    updatedAt: 'به‌روزرسانی شده در ',
  },
  changeHistory: {
    title: 'تاریخچه تغییرات',
    placeholder: 'هنوز تغییری ایجاد نکردید',
    clearHistory: 'پاک کردن تاریخچه',
    hint: 'راهنما',
    hintText: 'عملیات ویرایش شما در تاریخچه تغییرات پیگیری می‌شود که برای مدت این جلسه بر روی دستگاه شما ذخیره می‌شود. این تاریخچه هنگام خروج از ویرایشگر پاک خواهد شد.',
    stepBackward_one: '{{count}} قدم به عقب',
    stepBackward_other: '{{count}} قدم به عقب',
    stepForward_one: '{{count}} قدم به جلو',
    stepForward_other: '{{count}} قدم به جلو',
    sessionStart: 'شروع جلسه',
    currentState: 'وضعیت کنونی',
    nodeTitleChange: 'عنوان بلوک تغییر کرده است',
    nodeDescriptionChange: 'توضیحات بلوک تغییر کرده است',
    nodeDragStop: 'بلوک جابجا شده است',
    nodeChange: 'بلوک تغییر کرده است',
    nodeConnect: 'بلوک متصل شده است',
    nodePaste: 'بلوک چسبانده شده است',
    nodeDelete: 'بلوک حذف شده است',
    nodeAdd: 'بلوک اضافه شده است',
    nodeResize: 'اندازه بلوک تغییر کرده است',
    noteAdd: 'یادداشت اضافه شده است',
    noteChange: 'یادداشت تغییر کرده است',
    noteDelete: 'یادداشت حذف شده است',
    edgeDelete: 'بلوک قطع شده است',
  },
  errorMsg: {
    fieldRequired: '{{field}} الزامی است',
    authRequired: 'احراز هویت ضروری است',
    invalidJson: '{{field}} JSON معتبر نیست',
    fields: {
      variable: 'نام متغیر',
      variableValue: 'مقدار متغیر',
      code: 'کد',
      model: 'مدل',
      rerankModel: 'مدل مجدد رتبه‌بندی',
      visionVariable: 'متغیر بینایی',
    },
    invalidVariable: 'متغیر نامعتبر',
    rerankModelRequired: 'قبل از روشن کردن Rerank Model، لطفا تأیید کنید که مدل با موفقیت در تنظیمات پیکربندی شده است.',
  },
  singleRun: {
    testRun: 'اجرای آزمایشی',
    startRun: 'شروع اجرا',
    running: 'در حال اجرا',
    testRunIteration: 'تکرار اجرای آزمایشی',
    back: 'بازگشت',
    iteration: 'تکرار',
  },
  tabs: {
    'searchBlock': 'جستجوی بلوک',
    'blocks': 'بلوک‌ها',
    'tools': 'ابزارها',
    'allTool': 'همه',
    'builtInTool': 'درون‌ساخت',
    'customTool': 'سفارشی',
    'workflowTool': 'جریان کار',
    'question-understand': 'درک سوال',
    'logic': 'منطق',
    'transform': 'تبدیل',
    'utilities': 'ابزارهای کاربردی',
    'noResult': 'نتیجه‌ای پیدا نشد',
    'searchTool': 'ابزار جستجو',
  },
  blocks: {
    'start': 'شروع',
    'end': 'پایان',
    'answer': 'پاسخ',
    'llm': 'مدل زبان بزرگ',
    'knowledge-retrieval': 'استخراج دانش',
    'question-classifier': 'دسته‌بندی سوالات',
    'if-else': 'IF/ELSE',
    'code': 'کد',
    'template-transform': 'الگو',
    'http-request': 'درخواست HTTP',
    'variable-assigner': 'تخصیص‌دهنده متغیر',
    'variable-aggregator': 'تجمع‌دهنده متغیر',
    'assigner': 'تخصیص‌دهنده متغیر',
    'iteration-start': 'شروع تکرار',
    'iteration': 'تکرار',
    'parameter-extractor': 'استخراج‌کننده پارامتر',
    'list-operator': 'عملگر لیست',
    'document-extractor': 'استخراج کننده سند',
  },
  blocksAbout: {
    'start': 'پارامترهای اولیه برای راه‌اندازی جریان کار را تعریف کنید',
    'end': 'پایان و نوع نتیجه یک جریان کار را تعریف کنید',
    'answer': 'محتوای پاسخ مکالمه چت را تعریف کنید',
    'llm': 'استفاده از مدل‌های زبان بزرگ برای پاسخ به سوالات یا پردازش زبان طبیعی',
    'knowledge-retrieval': 'اجازه می‌دهد تا محتوای متنی مرتبط با سوالات کاربر از دانش استخراج شود',
    'question-classifier': 'شرایط دسته‌بندی سوالات کاربر را تعریف کنید، مدل زبان بزرگ می‌تواند بر اساس توضیحات دسته‌بندی، نحوه پیشرفت مکالمه را تعریف کند',
    'if-else': 'اجازه می‌دهد تا جریان کار به دو شاخه بر اساس شرایط if/else تقسیم شود',
    'code': 'اجرای یک قطعه کد Python یا NodeJS برای پیاده‌سازی منطق سفارشی',
    'template-transform': 'تبدیل داده‌ها به رشته با استفاده از سینتاکس الگوهای Jinja',
    'http-request': 'اجازه می‌دهد تا درخواست‌های سرور از طریق پروتکل HTTP ارسال شوند',
    'variable-assigner': 'تجمع متغیرهای چند شاخه‌ای به یک متغیر واحد برای پیکربندی یکپارچه نودهای پایین‌دستی.',
    'assigner': 'گره تخصیص متغیر برای اختصاص مقادیر به متغیرهای قابل نوشتن (مانند متغیرهای مکالمه) استفاده می‌شود.',
    'variable-aggregator': 'تجمع متغیرهای چند شاخه‌ای به یک متغیر واحد برای پیکربندی یکپارچه نودهای پایین‌دستی.',
    'iteration': 'اجرای چندین مرحله روی یک شیء لیست تا همه نتایج خروجی داده شوند.',
    'parameter-extractor': 'استفاده از مدل زبان بزرگ برای استخراج پارامترهای ساختاری از زبان طبیعی برای فراخوانی ابزارها یا درخواست‌های HTTP.',
    'list-operator': 'برای فیلتر کردن یا مرتب سازی محتوای آرایه استفاده می شود.',
    'document-extractor': 'برای تجزیه اسناد آپلود شده به محتوای متنی استفاده می شود که به راحتی توسط LLM قابل درک است.',
  },
  operator: {
    zoomIn: 'بزرگ‌نمایی',
    zoomOut: 'کوچک‌نمایی',
    zoomTo50: 'بزرگ‌نمایی به 50%',
    zoomTo100: 'بزرگ‌نمایی به 100%',
    zoomToFit: 'تناسب با اندازه',
  },
  panel: {
    userInputField: 'فیلد ورودی کاربر',
    changeBlock: 'تغییر بلوک',
    helpLink: 'لینک کمک',
    about: 'درباره',
    createdBy: 'ساخته شده توسط',
    nextStep: 'مرحله بعدی',
    addNextStep: 'افزودن بلوک بعدی به این جریان کار',
    selectNextStep: 'انتخاب بلوک بعدی',
    runThisStep: 'اجرا کردن این مرحله',
    checklist: 'چک‌لیست',
    checklistTip: 'اطمینان حاصل کنید که همه مسائل قبل از انتشار حل شده‌اند',
    checklistResolved: 'تمام مسائل حل شده‌اند',
    organizeBlocks: 'سازماندهی بلوک‌ها',
    change: 'تغییر',
    optional: '(اختیاری)',
  },
  nodes: {
    common: {
      outputVars: 'متغیرهای خروجی',
      insertVarTip: 'درج متغیر',
      memory: {
        memory: 'حافظه',
        memoryTip: 'تنظیمات حافظه چت',
        windowSize: 'اندازه پنجره',
        conversationRoleName: 'نام نقش مکالمه',
        user: 'پیشوند کاربر',
        assistant: 'پیشوند دستیار',
      },
      memories: {
        title: 'حافظه‌ها',
        tip: 'حافظه چت',
        builtIn: 'درون‌ساخت',
      },
      errorHandle: {
        none: {
          title: 'هیچ کدام',
          desc: 'اگر یک استثنا رخ دهد و مدیریت نشود، گره از کار می افتد',
        },
        defaultValue: {
          title: 'مقدار پیش فرض',
          output: 'مقدار پیش فرض خروجی',
          tip: 'در صورت خطا، به زیر مقدار برمی گردد.',
          inLog: 'استثنای گره، خروجی بر اساس مقادیر پیش فرض.',
          desc: 'هنگامی که خطایی رخ می دهد، یک محتوای خروجی ثابت را مشخص کنید.',
        },
        failBranch: {
          title: 'شاخه Fail',
          desc: 'هنگامی که خطایی رخ می دهد، شاخه استثنا را اجرا می کند',
          customize: 'برای سفارشی کردن منطق برنچ fail به بوم بروید.',
          inLog: 'Node exception، به طور خودکار شاخه fail را اجرا می کند. خروجی گره یک نوع خطا و پیام خطا را برمی گرداند و آنها را به پایین دست ارسال می کند.',
          customizeTip: 'هنگامی که شاخه fail فعال می شود، استثنائات پرتاب شده توسط گره ها فرآیند را خاتمه نمی دهند. در عوض، به طور خودکار شاخه شکست از پیش تعریف شده را اجرا می کند و به شما امکان می دهد پیام های خطا، گزارش ها، اصلاحات یا پرش از اقدامات را به طور انعطاف پذیر ارائه دهید.',
        },
        partialSucceeded: {
          tip: 'گره های {{num}} در این فرآیند وجود دارند که به طور غیرعادی اجرا می شوند، لطفا برای بررسی سیاههها به ردیابی بروید.',
        },
        title: 'مدیریت خطا',
        tip: 'استراتژی مدیریت استثنا، زمانی که یک گره با یک استثنا مواجه می شود، فعال می شود.',
      },
      retry: {
        times: 'بار',
        retryInterval: 'فاصله تلاش مجدد',
        retryOnFailure: 'در مورد شکست دوباره امتحان کنید',
        ms: 'خانم',
        retry: 'دوباره',
        retries: '{{عدد}} تلاش های مجدد',
        maxRetries: 'حداکثر تلاش مجدد',
        retrying: 'تلاش مجدد...',
        retryFailed: 'تلاش مجدد ناموفق بود',
        retryTimes: '{{times}} بار در صورت شکست دوباره امتحان کنید',
        retrySuccessful: 'امتحان مجدد با موفقیت انجام دهید',
        retryFailedTimes: '{{بار}} تلاش های مجدد ناموفق بود',
      },
    },
    start: {
      required: 'الزامی',
      inputField: 'فیلد ورودی',
      builtInVar: 'متغیرهای درون‌ساخت',
      outputVars: {
        query: 'ورودی کاربر',
        memories: {
          des: 'تاریخچه مکالمات',
          type: 'نوع پیام',
          content: 'محتوای پیام',
        },
        files: 'لیست فایل‌ها',
      },
      noVarTip: 'ورودی‌هایی را که می‌توان در جریان کار استفاده کرد، تنظیم کنید',
    },
    end: {
      outputs: 'خروجی‌ها',
      output: {
        type: 'نوع خروجی',
        variable: 'متغیر خروجی',
      },
      type: {
        'none': 'هیچ',
        'plain-text': 'متن ساده',
        'structured': 'ساختاری',
      },
    },
    answer: {
      answer: 'پاسخ',
      outputVars: 'متغیرهای خروجی',
    },
    llm: {
      model: 'مدل',
      variables: 'متغیرها',
      context: 'متن',
      contextTooltip: 'می‌توانید دانش را به عنوان متن وارد کنید',
      notSetContextInPromptTip: 'برای فعال کردن ویژگی متن، لطفاً متغیر متن را در PROMPT پر کنید.',
      prompt: 'پیشنهاد',
      roleDescription: {
        system: 'دستورات سطح بالا برای مکالمه را ارائه دهید',
        user: 'دستورات، پرسش‌ها، یا هر ورودی متنی را به مدل ارائه دهید',
        assistant: 'پاسخ‌های مدل بر اساس پیام‌های کاربر',
      },
      addMessage: 'افزودن پیام',
      vision: 'بینایی',
      files: 'فایل‌ها',
      resolution: {
        name: 'وضوح',
        high: 'بالا',
        low: 'پایین',
      },
      outputVars: {
        output: 'تولید محتوا',
        usage: 'اطلاعات استفاده از مدل',
      },
      singleRun: {
        variable: 'متغیر',
      },
      sysQueryInUser: 'sys.query در پیام کاربر ضروری است',
    },
    knowledgeRetrieval: {
      queryVariable: 'متغیر جستجو',
      knowledge: 'دانش',
      outputVars: {
        output: 'داده‌های تقسیم‌بندی شده بازیابی',
        content: 'محتوای تقسیم‌بندی شده',
        title: 'عنوان تقسیم‌بندی شده',
        icon: 'آیکون تقسیم‌بندی شده',
        url: 'URL تقسیم‌بندی شده',
        metadata: 'سایر متاداده‌ها',
      },
    },
    http: {
      inputVars: 'متغیرهای ورودی',
      api: 'API',
      apiPlaceholder: 'URL را وارد کنید، برای درج متغیر \' / \' را تایپ کنید',
      notStartWithHttp: 'API باید با http:// یا https:// شروع شود',
      key: 'کلید',
      value: 'مقدار',
      bulkEdit: 'ویرایش دسته‌ای',
      keyValueEdit: 'ویرایش کلید-مقدار',
      headers: 'هدرها',
      params: 'پارامترها',
      body: 'بدن',
      outputVars: {
        body: 'محتوای پاسخ',
        statusCode: 'کد وضعیت پاسخ',
        headers: 'فهرست هدر پاسخ JSON',
        files: 'لیست فایل‌ها',
      },
      authorization: {
        'authorization': 'احراز هویت',
        'authorizationType': 'نوع احراز هویت',
        'no-auth': 'هیچ',
        'api-key': 'کلید API',
        'auth-type': 'نوع احراز هویت',
        'basic': 'پایه',
        'bearer': 'دارنده',
        'custom': 'سفارشی',
        'api-key-title': 'کلید API',
        'header': 'هدر',
      },
      insertVarPlaceholder: 'برای درج متغیر \'/\' را تایپ کنید',
      timeout: {
        title: 'زمان‌توقف',
        connectLabel: 'زمان‌توقف اتصال',
        connectPlaceholder: 'زمان‌توقف اتصال را به ثانیه وارد کنید',
        readLabel: 'زمان‌توقف خواندن',
        readPlaceholder: 'زمان‌توقف خواندن را به ثانیه وارد کنید',
        writeLabel: 'زمان‌توقف نوشتن',
        writePlaceholder: 'زمان‌توقف نوشتن را به ثانیه وارد کنید',
      },
      binaryFileVariable: 'متغیر فایل باینری',
      type: 'نوع',
      extractListPlaceholder: 'فهرست آیتم لیست را وارد کنید، متغیر درج \'/\' را تایپ کنید',
      curl: {
        title: 'وارد کردن از cURL',
        placeholder: 'رشته cURL را اینجا بچسبانید',
      },
    },
    code: {
      inputVars: 'متغیرهای ورودی',
      outputVars: 'متغیرهای خروجی',
      advancedDependencies: 'وابستگی‌های پیشرفته',
      advancedDependenciesTip: 'برخی وابستگی‌های پیش‌بارگذاری شده که زمان بیشتری برای مصرف نیاز دارند یا به طور پیش‌فرض در اینجا موجود نیستند، اضافه کنید',
      searchDependencies: 'جستجوی وابستگی‌ها',
    },
    templateTransform: {
      inputVars: 'متغیرهای ورودی',
      code: 'کد',
      codeSupportTip: 'فقط Jinja2 را پشتیبانی می‌کند',
      outputVars: {
        output: 'محتوای تبدیل‌شده',
      },
    },
    ifElse: {
      if: 'اگر',
      else: 'در غیر این صورت',
      elseDescription: 'برای تعریف منطق که باید زمانی که شرط if برآورده نشود، اجرا شود.',
      and: 'و',
      or: 'یا',
      operator: 'عملگر',
      notSetVariable: 'لطفاً ابتدا متغیر را تنظیم کنید',
      comparisonOperator: {
        'contains': 'شامل',
        'not contains': 'شامل نمی‌شود',
        'start with': 'شروع با',
        'end with': 'پایان با',
        'is': 'است',
        'is not': 'نیست',
        'empty': 'خالی است',
        'not empty': 'خالی نیست',
        'null': 'خالی',
        'not null': 'خالی نیست',
        'regex match': 'مسابقه regex',
        'in': 'در',
        'not exists': 'وجود ندارد',
        'all of': 'همه از',
        'not in': 'نه در',
        'exists': 'موجود',
      },
      enterValue: 'مقدار را وارد کنید',
      addCondition: 'افزودن شرط',
      conditionNotSetup: 'شرط تنظیم نشده است',
      selectVariable: 'متغیر را انتخاب کنید...',
      optionName: {
        video: 'ویدئو',
        doc: 'توضیحات',
        localUpload: 'آپلود محلی',
        audio: 'صوتی',
        url: 'آدرس',
        image: 'تصویر',
      },
      select: 'انتخاب',
      addSubVariable: 'متغیر فرعی',
    },
    variableAssigner: {
      title: 'تخصیص متغیرها',
      outputType: 'نوع خروجی',
      varNotSet: 'متغیر تنظیم نشده است',
      noVarTip: 'متغیرهایی را که باید اختصاص داده شوند اضافه کنید',
      type: {
        string: 'رشته',
        number: 'عدد',
        object: 'شیء',
        array: 'آرایه',
      },
      aggregationGroup: 'گروه تجمع',
      aggregationGroupTip: 'فعال کردن این ویژگی اجازه می‌دهد تا تجمع‌کننده متغیرها چندین مجموعه متغیر را تجمیع کند.',
      addGroup: 'افزودن گروه',
      outputVars: {
        varDescribe: '{{groupName}} خروجی',
      },
      setAssignVariable: 'تعیین متغیر تخصیص یافته',
    },
    assigner: {
      'assignedVariable': 'متغیر اختصاص داده شده',
      'writeMode': 'حالت نوشتن',
      'writeModeTip': 'وقتی متغیر اختصاص داده شده یک آرایه است، حالت افزودن به انتها اضافه می‌کند.',
      'over-write': 'بازنویسی',
      'append': 'افزودن',
      'plus': 'به علاوه',
      'clear': 'پاک کردن',
      'setVariable': 'تنظیم متغیر',
      'variable': 'متغیر',
      'operations': {
        'clear': 'روشن',
        'over-write': 'بازنویسی',
        'set': 'مجموعه',
        '*=': '*=',
        'overwrite': 'بازنویسی',
        '+=': '+=',
        'title': 'عملیات',
        'extend': 'گسترش',
        '-=': '-=',
        'append': 'الحاق',
        '/=': '/=',
      },
      'noVarTip': 'برای افزودن متغیرها روی دکمه "+" کلیک کنید',
      'selectAssignedVariable': 'متغیر اختصاص داده شده را انتخاب کنید...',
      'noAssignedVars': 'هیچ متغیر اختصاص داده شده در دسترس نیست',
      'setParameter': 'پارامتر را تنظیم کنید...',
      'assignedVarsDescription': 'متغیرهای اختصاص داده شده باید متغیرهای قابل نوشتن مانند متغیرهای مکالمه باشند.',
      'variables': 'متغیرهای',
      'varNotSet': 'متغیر NOT Set',
    },
    tool: {
      toAuthorize: 'برای مجوز دادن',
      inputVars: 'متغیرهای ورودی',
      outputVars: {
        text: 'محتوای تولید شده توسط ابزار',
        files: {
          title: 'فایل‌های تولید شده توسط ابزار',
          type: 'نوع پشتیبانی. در حال حاضر فقط تصاویر پشتیبانی می‌شود',
          transfer_method: 'روش انتقال. مقدار آن remote_url یا local_file است',
          url: 'URL تصویر',
          upload_file_id: 'شناسه فایل آپلود شده',
        },
        json: 'json تولید شده توسط ابزار',
      },
    },
    questionClassifiers: {
      model: 'مدل',
      inputVars: 'متغیرهای ورودی',
      outputVars: {
        className: 'نام کلاس',
      },
      class: 'کلاس',
      classNamePlaceholder: 'نام کلاس خود را بنویسید',
      advancedSetting: 'تنظیمات پیشرفته',
      topicName: 'نام موضوع',
      topicPlaceholder: 'نام موضوع خود را بنویسید',
      addClass: 'افزودن کلاس',
      instruction: 'دستورالعمل',
      instructionTip: 'دستورالعمل‌های اضافی را برای کمک به دسته‌بند سوالات برای درک بهتر نحوه دسته‌بندی سوالات وارد کنید.',
      instructionPlaceholder: 'دستورالعمل خود را بنویسید',
    },
    parameterExtractor: {
      inputVar: 'متغیر ورودی',
      extractParameters: 'استخراج پارامترها',
      importFromTool: 'وارد کردن از ابزارها',
      addExtractParameter: 'افزودن پارامتر استخراج شده',
      addExtractParameterContent: {
        name: 'نام',
        namePlaceholder: 'نام پارامتر استخراج شده',
        type: 'نوع',
        typePlaceholder: 'نوع پارامتر استخراج شده',
        description: 'توضیحات',
        descriptionPlaceholder: 'توضیحات پارامتر استخراج شده',
        required: 'الزامی',
        requiredContent: 'الزامی فقط به عنوان مرجع برای استنتاج مدل استفاده می‌شود و برای اعتبارسنجی اجباری خروجی پارامتر نیست.',
      },
      extractParametersNotSet: 'پارامترهای استخراج شده تنظیم نشده‌اند',
      instruction: 'دستورالعمل',
      instructionTip: 'دستورالعمل‌های اضافی را برای کمک به استخراج‌کننده پارامتر برای درک نحوه استخراج پارامترها وارد کنید.',
      advancedSetting: 'تنظیمات پیشرفته',
      reasoningMode: 'حالت استدلال',
      reasoningModeTip: 'می‌توانید حالت استدلال مناسب را بر اساس توانایی مدل برای پاسخ به دستورات برای فراخوانی عملکردها یا پیشنهادات انتخاب کنید.',
      isSuccess: 'موفقیت‌آمیز است. در صورت موفقیت مقدار 1 و در صورت شکست مقدار 0 است.',
      errorReason: 'دلیل خطا',
    },
    iteration: {
      deleteTitle: 'حذف نود تکرار؟',
      deleteDesc: 'حذف نود تکرار باعث حذف تمام نودهای فرزند خواهد شد',
      input: 'ورودی',
      output: 'متغیرهای خروجی',
      iteration_one: '{{count}} تکرار',
      iteration_other: '{{count}} تکرارها',
      currentIteration: 'تکرار فعلی',
      ErrorMethod: {
        continueOnError: 'ادامه در خطا',
        operationTerminated: 'فسخ',
        removeAbnormalOutput: 'حذف خروجی غیرطبیعی',
      },
      error_one: '{{تعداد}} خطا',
      error_other: '{{تعداد}} خطاهای',
      parallelMode: 'حالت موازی',
      errorResponseMethod: 'روش پاسخ به خطا',
      parallelModeEnableTitle: 'حالت موازی فعال است',
      parallelModeUpper: 'حالت موازی',
      comma: ',',
      parallelModeEnableDesc: 'در حالت موازی، وظایف درون تکرارها از اجرای موازی پشتیبانی می کنند. می توانید این را در پانل ویژگی ها در سمت راست پیکربندی کنید.',
      MaxParallelismTitle: 'حداکثر موازی سازی',
      parallelPanelDesc: 'در حالت موازی، وظایف در تکرار از اجرای موازی پشتیبانی می کنند.',
      MaxParallelismDesc: 'حداکثر موازی سازی برای کنترل تعداد وظایف اجرا شده به طور همزمان در یک تکرار واحد استفاده می شود.',
      answerNodeWarningDesc: 'هشدار حالت موازی: گره های پاسخ، تکالیف متغیر مکالمه و عملیات خواندن/نوشتن مداوم در تکرارها ممکن است باعث استثنائات شود.',
    },
    note: {
      addNote: 'افزودن یادداشت',
      editor: {
        placeholder: 'یادداشت خود را بنویسید...',
        small: 'کوچک',
        medium: 'متوسط',
        large: 'بزرگ',
        bold: 'پررنگ',
        italic: 'ایتالیک',
        strikethrough: 'خط‌خورده',
        link: 'لینک',
        openLink: 'باز کردن',
        unlink: 'حذف لینک',
        enterUrl: 'URL را وارد کنید...',
        invalidUrl: 'URL نامعتبر',
        bulletList: 'فهرست گلوله‌ای',
        showAuthor: 'نمایش نویسنده',
      },
    },
    docExtractor: {
      outputVars: {
        text: 'متن استخراج شده',
      },
      inputVar: 'متغیر ورودی',
      learnMore: 'بیشتر بدانید',
      supportFileTypes: 'انواع فایل های پشتیبانی: {{types}}.',
    },
    listFilter: {
      outputVars: {
        result: 'نتیجه فیلتر',
        first_record: 'اولین رکورد',
        last_record: 'آخرین رکورد',
      },
      limit: 'بالا N',
      inputVar: 'متغیر ورودی',
      filterCondition: 'وضعیت فیلتر',
      orderBy: 'سفارش بر اساس',
      filterConditionKey: 'کلید وضعیت فیلتر',
      desc: 'نزولی',
      filterConditionComparisonOperator: 'عملگر مقایسه شرایط فیلتر',
      filterConditionComparisonValue: 'مقدار شرایط فیلتر',
      selectVariableKeyPlaceholder: 'کلید متغیر فرعی را انتخاب کنید',
      asc: 'صعودی',
      extractsCondition: 'مورد N را استخراج کنید',
    },
  },
  tracing: {
    stopBy: 'متوقف شده توسط {{user}}',
  },
  variableReference: {
    noAvailableVars: 'هیچ متغیری در دسترس نیست',
    conversationVars: 'متغیرهای مکالمه',
    noVarsForOperation: 'هیچ متغیری برای تخصیص با عملیات انتخاب شده در دسترس نیست.',
    assignedVarsDescription: 'متغیرهای اختصاص داده شده باید متغیرهای قابل نوشتن باشند، مانند',
    noAssignedVars: 'هیچ متغیر اختصاص داده شده در دسترس نیست',
  },
}

export default translation