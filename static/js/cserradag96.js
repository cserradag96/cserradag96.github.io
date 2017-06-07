/*#########################################################################################################################################################################################################################
# MODULE CREATION
#########################################################################################################################################################################################################################*/
var cserradag96 = angular.module("cserradag96", ["ui.router", 'pascalprecht.translate', 'ngSanitize', 'oitozero.ngSweetAlert', 'vcRecaptcha']);

/*#########################################################################################################################################################################################################################
# APP CONFIGURATION
#########################################################################################################################################################################################################################*/
cserradag96.config(function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, vcRecaptchaServiceProvider) {

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - ROUTES MANAGEMENT
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    $stateProvider
        // Main screen
        .state("main", {
            url         : "/",
            templateUrl : "views/main/main.html",
            controller  : "MainController"
        })

        // Main screen
        .state("recaptcha", {
            url         : "/verification",
            templateUrl : "views/main/recaptcha.html",
            controller  : "RecaptchaController"
        })

    // Wrong url
    $urlRouterProvider.otherwise("/");

    // Activate html5 mode
    $locationProvider.html5Mode(true);

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - TRANSLATE MANAGEMENT
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    // Spanish language
    $translateProvider.translations("es", {
      submit      : "Enviar",

      // Cover section
      lang        : "<i class='fa fa-globe' aria-hidden='true'></i> english",
      main_text0  : "¡Bienvenido!",
      main_text1  : "Me llamo <strong>Carlos Serrada</strong>, y éste es mi portafolio",

      // About me section
      about_me       : "acerca de mi",
      about_me_text0 : "Soy estudiante de ingeniería de la computación en la universidad más prestigiosa de Venezuela, la <a href='http://www.usb.ve/'>Universidad Simón Bolívar (USB)</a>. Me encuentro en el cuarto año\
                       de los cinco que componen la carrera y a la fecha he cursado multitud de asignaturas geniales, entre los cuales puedo resaltar los de lógica simbólica, matemática discreta, algoritmos, sistemas \
                       operativos, bases de datos e ingeniería de software por su impacto e importancia en mi formación profesional.",
      about_me_text1 : "Estoy muy agradecido por estudiar en una universidad con tan alto grado de excelencia educativa, sobretodo considerando el país en donde vivo, sin embargo, mis ansias de conocimiento no quedan\
                       satisfechas solo con lo que aprendo allí y es por eso que he crecido enormemente como desarrollador siendo autodidacta y participando en numerosos proyectos y eventos.",
      about_me_text2 : "Mi búsqueda de conocimiento me ha llevado al mundo laboral mediante el desarrollo web, en el cual he estado especializándome desde hace un tiempo, en especial en la rama del frontend, sin \
                       embargo no me limito solo a ésta área, tengo conocimientos en backend y una de mis metas actuales en convertirme en desarrollador web full stack.",
      about_me_text3 : "Pero lo anterior no significa que solo me limite al desarrollo web, pues me apasionan muchos otros temas y he desarrollado todo tipo de software en el camino. Me considero talentoso, aprendo \
                       rápido, y siempre intento dar lo mejor de mi en mi trabajo y resulta muy fácil hacerlo porque amo lo que hago.",

      // Skills section
      skills       : "habilidades",
      skills_text0 : "Poseo muchas habilidades que me permiten ejercer una gran diversidad de trabajos relacionados con el desarrollo de software, y entre ellas estan el dominio avanzado de múltiples lenguajes de \
                      programación, frameworks de desarrollo web y de escritorio, IDEs, DBMS y programas de edición digital.",
      skills_text1 : "Entre los lenguajes que domino actualmente destacan: Python (el cual es mi lenguaje preferido), C/C++, Ruby, Java, JavaScript, Bash, Matlab y lenguaje ensamblador. En cuanto a las tecnologías \
                      para desarrollo web, poseo un gran dominio de HTML5, CSS3 y el ya mencionado JavaScript, acompañados ademas por el manejo de frameworks y librerias como: jQuery, AJAX, Bootstrap, AngularJS, django\
                      y WEB2PY.",
      skills_text2 : "Tambien se trabajar con el framework Qt de manera muy profesional para crear interfaces para programas de escritorio, y al mismo tiempo suelo emparejarlo con Python mediante la libreria PyQt. \
                      Para la parte de bases de datos, poseo buenos conocimientos para el diseño de modelos relaciones y su traduccion a SQL. Solo he trabajado con PostgreSQL como manejador de base de datos, y en  \
                      algunos casos he usado ORM´s como SQLAlchemy junto a él.",
      skills_text3 : "Soy fanático del control de versiones asi como de la legibilidad, modularización y mantenimiento del código. Utilizo git para todos mis proyectos, ya sea que se encuentren alojados en GitHub,\
                      Bitbucket o Gitlab. He trabajado en varios entornos de desarrollo como por ejemplo Eclipse, pero prefiero usar editores texto como Sublime Text o Atom. Siempre escribo y comento mi código en \
                      inglés, y trato de seguir el estilo recomendado para cada lenguaje, aunque siempre le doy mi toque personal para mejorar la legibilidad.",
      skills_text4 : "Me encanta mucho la parte del diseño y es por eso que manejo programas como GIMP e Inkscape, aunque mi dominio sobre ellos sigue siendo muy básico.",
      skills_text5 : "Sumado a todo lo que ya he mencionado, tengo gran dominio de muchos otros programas, por mencionar algunos de ellos tenemos a Microsoft Office, LibreOffice, WPS Office, Google Docs, StartUML, \
                      Dia, Visual Paradigm, DbVisualizer, Mars, entre otros.",

      // Experience section
      experience       : "experiencia",
      experience_text0 : "Comencé a programar a la edad de 16 años, poco antes de iniciar mis estudios universitarios y el lenguaje de programación con el que me inicié fue JavaScript, no lo escogí por ninguna\
                         razón en particular, solo había escuchado mucho de él y me pareció divertido aprenderlo. Al mismo tiempo sin darme cuenta empecé a aprender algo de HTML y CSS para acompañar los scripts que\
                         desarrollaba y llegue a hacer cosas muy geniales como por ejemplo una página que generaba una historia aleatoria dependiendo de ciertas preguntas que se le hacian al usuario.",
      experience_text1 : "Han pasado 4 años desde entonces y he acumulado muchísima experiencia tanto en mis investigaciones personales como en los númerosos proyectos que me ha tocado desarrollar para mis\
                         asignaturas en la  universidad y ahora tambien en el campo laboral.",
      experience_text2 : "El primer \"trabajo\" que tuve fue cuando fui elegido por mis compañeros de la carrera como el Coordinador de Información y Tecnología del Centro de Estudiantes de Ingeniería de la Computación\
                         de la Universidad Simón Bolívar para el periodo 2016-2017. Sigo ocupando este cargo y para poder llevar el peso que conlleva he tenido que aprender muchísimo.",
      experience_text3 : "Me ha tocado diseñar y organizar eventos de programación competitiva, aprender técnicas de automatización y manejo de redes sociales para difusión masiva de información, aprender a utilizar \
                         django y otras tecnologías de desarrollo web para poder darle mantenimiento a ciertas aplicaciones con las que cuenta el centro de estudiantes, y además desarrollar un sistema de ventas \
                         comercial, mantenible y multiplataforma.",
      experience_text4 : "Al llegar al final del tercer año de la carrera, participé en dos proyectos de desarrollo de software necesarios para poder aprobar ciertas asignaturas. Ambos proyectos fueron con clientes\
                         reales pero usando metodologías y tecnologías diferentes. En uno de ellos se trabajó con django y en el otro con web2py, en ambos cumplí el rol de desarrollador frontend, pero en el segundo \
                         además cumplí como rol de líder del proyecto. Adquirí mucha experiencia con estos dos proyectos y fue la primera vez que interactué con clientes.",
      experience_text5 : "Recientemente me uní al campo laboral oficialmente y me encuentro trabajando en dos proyectos de desarrollo web, ambos con AngularJS y con excelentes resultados.",

      // Projects section
      projects    : "proyectos",

      // Contact me section
      contact_me       : "contáctame",
      contact_me_text0 : "Escríbeme",
      contact_me_text1 : "Nombre",
      contact_me_text2 : "Correo electrónico",
      contact_me_text3 : "Escribir un mensaje...",
      contact_me_text4 : "Sígueme",
      contact_me_text5 : "Ayúdame a mejorar el sitio",
      contact_me_text6 : "Por favor hazme saber tus sugerencias, tus comentarios y los errores que encuentres haciendo click <a href='https://github.com/cserradag96/cserradag96.github.io/issues'>aquí</a>. Además, \
                          si te ha gustado mi trabajo puedes ayudarme a seguir investigando haciendo una donación:",
      contact_me_form0 : "Nombre",
      contact_me_form1 : "Dirección email",
      contact_me_form2 : "Escriba un mensaje...",

      // Recaptcha
      recaptcha_text0 : "Por favor completa lo siguiente para continuar",
      recaptcha_text1 : "Continuar",
      recaptcha_text2 : "Se ha enviado el correo :D",
      recaptcha_text3 : "Volver al portafolio"
    });

    // English language
    $translateProvider.translations("en", {
      submit      : "Submit",

      // Cover section
      lang        : "<i class='fa fa-globe' aria-hidden='true'></i> español",
      main_text0  : "Welcome!",
      main_text1  : "My name is <strong>Carlos Serrada</strong>, and this is my portfolio",

      // About me section
      about_me       : "about me",
      about_me_text0 : "Soy estudiante de ingeniería de la computación en la universidad más prestigiosa de Venezuela, la <a href='http://www.usb.ve/'>Universidad Simón Bolívar (USB)</a>. Me encuentro en el cuarto año\
                       de los cinco que componen la carrera y a la fecha he cursado multitud de asignaturas geniales, entre los cuales puedo resaltar los de lógica simbólica, matemática discreta, algoritmos, sistemas \
                       operativos, bases de datos e ingeniería de software por su impacto e importancia en mi formación profesional.",
      about_me_text1 : "Estoy muy agradecido por estudiar en una universidad con tan alto grado de excelencia educativa, sobretodo considerando el país en donde vivo, sin embargo, mis ansias de conocimiento no quedan\
                       satisfechas solo con lo que aprendo allí y es por eso que he crecido enormemente como desarrollador siendo autodidacta y participando en numerosos proyectos y eventos.",
      about_me_text2 : "Mi búsqueda de conocimiento me ha llevado al mundo laboral mediante el desarrollo web, en el cual he estado especializándome desde hace un tiempo, en especial en la rama del frontend, sin \
                       embargo no me limito solo a ésta área, tengo conocimientos en backend y una de mis metas actuales en convertirme en desarrollador web full stack.",
      about_me_text3 : "Pero lo anterior no significa que solo me limite al desarrollo web, pues me apasionan muchos otros temas y he desarrollado todo tipo de software en el camino. Me considero talentoso, aprendo \
                       rápido, y siempre intento dar lo mejor de mi en mi trabajo y resulta muy fácil hacerlo porque amo lo que hago.",

      // Skills section
      skills       : "skills",
      skills_text0 : "Poseo muchas habilidades que me permiten ejercer una gran diversidad de trabajos relacionados con el desarrollo de software, y entre ellas estan el dominio avanzado de múltiples lenguajes de \
                      programación, frameworks de desarrollo web y de escritorio, IDEs, DBMS y programas de edición digital.",
      skills_text1 : "Entre los lenguajes que domino actualmente destacan: Python (el cual es mi lenguaje preferido), C/C++, Ruby, Java, JavaScript, Bash, Matlab y lenguaje ensamblador. En cuanto a las tecnologías \
                      para desarrollo web, poseo un gran dominio de HTML5, CSS3 y el ya mencionado JavaScript, acompañados ademas por el manejo de frameworks y librerias como: jQuery, AJAX, Bootstrap, AngularJS, django\
                      y WEB2PY.",
      skills_text2 : "Tambien se trabajar con el framework Qt de manera muy profesional para crear interfaces para programas de escritorio, y al mismo tiempo suelo emparejarlo con Python mediante la libreria PyQt. \
                      Para la parte de bases de datos, poseo buenos conocimientos para el diseño de modelos relaciones y su traduccion a SQL. Solo he trabajado con PostgreSQL como manejador de base de datos, y en  \
                      algunos casos he usado ORM´s como SQLAlchemy junto a él.",
      skills_text3 : "Soy fanático del control de versiones asi como de la legibilidad, modularización y mantenimiento del código. Utilizo git para todos mis proyectos, ya sea que se encuentren alojados en GitHub,\
                      Bitbucket o Gitlab. He trabajado en varios entornos de desarrollo como por ejemplo Eclipse, pero prefiero usar editores texto como Sublime Text o Atom. Siempre escribo y comento mi código en \
                      inglés, y trato de seguir el estilo recomendado para cada lenguaje, aunque siempre le doy mi toque personal para mejorar la legibilidad.",
      skills_text4 : "Me encanta mucho la parte del diseño y es por eso que manejo programas como GIMP e Inkscape, aunque mi dominio sobre ellos sigue siendo muy básico.",
      skills_text5 : "Sumado a todo lo que ya he mencionado, tengo gran dominio de muchos otros programas, por mencionar algunos de ellos tenemos a Microsoft Office, LibreOffice, WPS Office, Google Docs, StartUML, \
                      Dia, Visual Paradigm, DbVisualizer, Mars, entre otros.",

      // Experience section
      experience       : "experience",
      experience_text0 : "Comencé a programar a la edad de 16 años, poco antes de iniciar mis estudios universitarios y el lenguaje de programación con el que me inicié fue JavaScript, no lo escogí por ninguna\
                         razón en particular, solo había escuchado mucho de él y me pareció divertido aprenderlo. Al mismo tiempo sin darme cuenta empecé a aprender algo de HTML y CSS para acompañar los scripts que\
                         desarrollaba y llegue a hacer cosas muy geniales como por ejemplo una página que generaba una historia aleatoria dependiendo de ciertas preguntas que se le hacian al usuario.",
      experience_text1 : "Han pasado 4 años desde entonces y he acumulado muchísima experiencia tanto en mis investigaciones personales como en los númerosos proyectos que me ha tocado desarrollar para mis\
                         asignaturas en la  universidad y ahora tambien en el campo laboral.",
      experience_text2 : "El primer \"trabajo\" que tuve fue cuando fui elegido por mis compañeros de la carrera como el Coordinador de Información y Tecnología del Centro de Estudiantes de Ingeniería de la Computación\
                         de la Universidad Simón Bolívar para el periodo 2016-2017. Sigo ocupando este cargo y para poder llevar el peso que conlleva he tenido que aprender muchísimo.",
      experience_text3 : "Me ha tocado diseñar y organizar eventos de programación competitiva, aprender técnicas de automatización y manejo de redes sociales para difusión masiva de información, aprender a utilizar \
                         django y otras tecnologías de desarrollo web para poder darle mantenimiento a ciertas aplicaciones con las que cuenta el centro de estudiantes, y además desarrollar un sistema de ventas \
                         comercial, mantenible y multiplataforma.",
      experience_text4 : "Al llegar al final del tercer año de la carrera, participé en dos proyectos de desarrollo de software necesarios para poder aprobar ciertas asignaturas. Ambos proyectos fueron con clientes\
                         reales pero usando metodologías y tecnologías diferentes. En uno de ellos se trabajó con django y en el otro con web2py, en ambos cumplí el rol de desarrollador frontend, pero en el segundo \
                         además cumplí como rol de líder del proyecto. Adquirí mucha experiencia con estos dos proyectos y fue la primera vez que interactué con clientes.",
      experience_text5 : "Recientemente me uní al campo laboral oficialmente y me encuentro trabajando en dos proyectos de desarrollo web, ambos con AngularJS y con excelentes resultados.",

      // Projects section
      projects    : "projects",

      // Contact me section
      contact_me       : "contact me",
      contact_me_text0 : "Write me",
      contact_me_text1 : "Name",
      contact_me_text2 : "Email address",
      contact_me_text3 : "Write a message...",
      contact_me_text4 : "Follow me",
      contact_me_text5 : "Help me to improve the site",
      contact_me_text6 : "Please let me know your suggestions, your comments and the errors you find by clicking <a href='https://github.com/cserradag96/cserradag96.github.io/issues'>here</a>. Also, if you liked my \
                          work you can help me to continue investigating making a donation:",
      contact_me_form0 : "Name",
      contact_me_form1 : "Email address",
      contact_me_form2 : "Write a message...",

      // Recaptcha
      recaptcha_text0 : "Please complete the following to continue",
      recaptcha_text1 : "Continue",
      recaptcha_text2 : "The email has been sent :D",
      recaptcha_text3 : "Back to portfolio"
    });

    // Default language
    $translateProvider.preferredLanguage('es');

    // Mark as safe
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    /*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    - RECAPTCHA
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    vcRecaptchaServiceProvider.setDefaults({
        key  : '6LdEbyQUAAAAAIvf-9Nc5G9u7itWnQkwLKqsz_em',
        size : 'normal'
    });

});

/*#########################################################################################################################################################################################################################
# INITIAL GLOBAL SETTINGS
#########################################################################################################################################################################################################################*/
cserradag96.run(function ($rootScope) {
    $rootScope.baseURL = "https://cserradag96.github.io/";                   /* Server domain */
    $rootScope.apiURL  = "static/apis/";                                     /* Server domain */
    $rootScope.lang    = 'es';                                               /* Default lenguage */
    $rootScope.grcAPI  = "https://www.google.com/recaptcha/api/siteverify "  /* Google recaptcha server side verify api */
});
