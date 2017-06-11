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
      lang          : "<i class='fa fa-globe' aria-hidden='true'></i> english",
      cover_text0   : "¡Bienvenido!",
      cover_text1   : "Me llamo <strong>Carlos Serrada</strong>, y éste es mi portafolio",
      cover_button0 : "Descargar CV",

      // About me section
      about_me       : "acerca de mi",
      about_me_text0 : "Soy estudiante de ingeniería de la computación en la universidad más prestigiosa de Venezuela, la Universidad Simón Bolívar (USB). Me encuentro en el cuarto año, de los cinco que componen la \
                        carrera, y a la fecha he cursado multitud de asignaturas geniales, entre las cuales puedo resaltar las siguientes: lógica simbólica, matemática discreta, algoritmos, sistemas operativos, bases \
                        de datos e ingeniería de software por su impacto e importancia en mi formación profesional.",
      about_me_text1 : "Es un honor para mí estudiar en una universidad con tan alto grado de excelencia educativa, sobre todo considerando las circunstancias presentes en donde vivo. Sin embargo, mis ansias de \
                        conocimiento no quedan satisfechas sólo con lo que aprendo allí y es por eso que he crecido enormemente como desarrollador siendo autodidacta y participando en numerosos proyectos y eventos.",
      about_me_text2 : "Mi búsqueda de conocimiento me ha llevado al mundo laboral mediante el desarrollo web, en el cual he estado especializándome desde hace un tiempo, en especial en la rama del front-end, sin \
                        embargo, no me limito solo a esta área, tengo conocimientos en back-end y una de mis metas actuales es convertirme en desarrollador web full stack.",
      about_me_text3 : "Lo anterior no significa que sólo me limite al desarrollo web, pues me apasionan muchos otros temas y he desarrollado todo tipo de software en el camino. Me considero talentoso, aprendo rápido,\
                        y siempre intento dar lo mejor de mí en mi trabajo y resulta muy fácil hacerlo porque amo lo que hago.",

      // Skills section
      skills       : "habilidades",
      skills_text0 : "Poseo muchas habilidades que me permiten ejercer una gran diversidad de trabajos relacionados con el desarrollo de software, y entre ellas están el dominio avanzado de múltiples lenguajes de \
                      programación, frameworks de desarrollo web y de escritorio, IDE’s, DBMS y programas de edición digital.",
      skills_text1 : "Entre los lenguajes que domino actualmente destacan: Python (el cual es mi preferido), C/C++, Ruby, Java, JavaScript, Bash, Matlab y lenguaje ensamblador. En cuanto a las tecnologías para \
                      desarrollo web, poseo un gran dominio de HTML5, CSS3 y el ya mencionado JavaScript, acompañados además por el manejo de frameworks y librerías como: jQuery, AJAX, Bootstrap, AngularJS, django y \
                      WEB2PY.",
      skills_text2 : "También sé trabajar con el framework Qt de manera muy profesional para crear interfaces para programas de escritorio, y al mismo tiempo suelo emparejarlo con Python mediante la librería PyQt. \
                      Para la parte de bases de datos, poseo buenos conocimientos para el diseño de modelos, relaciones y su traducción a SQL. Solo he trabajado con PostgreSQL como manejador de base de datos, y en \
                      algunos casos he usado ORM’s como SQLAlchemy junto a él.",
      skills_text3 : "Soy fanático del control de versiones, así como de la legibilidad, modularización y mantenimiento del código. Utilizo git para todos mis proyectos, ya sea que se encuentren alojados en GitHub, \
                      Bitbucket o Gitlab. He trabajado en varios entornos de desarrollo como por ejemplo Eclipse, pero prefiero usar editores texto como Sublime Text o Atom. Siempre escribo y comento mi código en \
                      inglés, y trato de seguir el estilo recomendado para cada lenguaje, aunque siempre le doy mi toque personal para mejorar la legibilidad.",
      skills_text4 : "Me gusta mucho la parte del diseño y es por eso que manejo programas como GIMP e Inkscape, aunque mi dominio sobre ellos es por el momento muy básico.",
      skills_text5 : "Sumado a todo lo que ya he mencionado, tengo gran dominio de muchos otros programas, algunos de ellos son: Microsoft Office, LibreOffice, WPS Office, Google Docs, StartUML, Dia, Visual Paradigm, \
                      DbVisualizer y Mars.",

      // Experience section
      experience       : "experiencia",
      experience_text0 : "Comencé a programar a la edad de 16 años, poco antes de iniciar mis estudios universitarios y el lenguaje de programación con el que me inicié fue JavaScript, no lo escogí por ninguna razón \
                          en particular, sólo había escuchado mucho de él y me pareció divertido aprenderlo. Al mismo tiempo sin darme cuenta empecé a aprender algo de HTML y CSS para acompañar los scripts que \
                          desarrollaba y llegué a hacer cosas muy geniales como por ejemplo una página que generaba una historia aleatoria dependiendo de ciertas preguntas que se le hacían al usuario.",
      experience_text1 : "Han pasado 4 años desde entonces y he acumulado muchísima experiencia tanto en mis investigaciones personales como en los numerosos proyectos que he desarrollado para mis asignaturas en la \
                          universidad y ahora también en el campo laboral.",
      experience_text2 : "Actualmente me desempeño como Coordinador de Información y Tecnología del Centro de Estudiantes de Ingeniería de la Computación de la Universidad Simón Bolívar (periodo 2016-2017), \
                          cargo para el cual fui elegido por mis compañeros de la carrera, lo que ha resultado ser todo un reto, puesto que para lograr estar a la altura de lo que conlleva este puesto, he tenido \
                          que aprender muchísimo.",
      experience_text3 : "He tenido la oportunidad de diseñar y organizar eventos de programación competitiva, aprender técnicas de automatización y manejo de redes sociales para difusión masiva de información, \
                          aprender a utilizar django y otras tecnologías de desarrollo web para poder darle mantenimiento a ciertas aplicaciones con las que cuenta el centro de estudiantes, y además desarrollar un \
                          sistema de ventas comercial, mantenible y multiplataforma.",
      experience_text4 : "Al llegar al final del tercer año de la carrera, participé en dos proyectos de desarrollo de software necesarios para poder aprobar ciertas asignaturas. Ambos proyectos se desarrollaron para \
                          clientes reales, pero usando metodologías y tecnologías diferentes. En uno de ellos se trabajó con django y en el otro con web2py, en ambos cumplí el rol de desarrollador front-end, pero en \
                          el segundo además cumplí como rol de líder del proyecto. Adquirí mucha experiencia con estos dos proyectos y fue la primera vez que interactué con clientes.",
      experience_text5 : "Recientemente me uní al campo laboral oficialmente y me encuentro trabajando en dos proyectos de desarrollo web, ambos con AngularJS y los cuales han arrojado excelentes resultados.",

      // Projects section
      projects       : "proyectos",
      project_title0 : "GUIKIFIX",
      project_title1 : "INEA Tugs",
      project_title2 : "Apolo",
      project_title3 : "SIGPAE",
      project_title4 : "CEIC Suite",
      project_title5 : "Retyna",
      project_title6 : "PyCG Player",
      project_title7 : "Unlimited Lines & Rectangles",
      project_text0  : "",
      project_text1  : "Sistema de gestión y control de actividades para el INEA.",
      project_text2  : "Sistema de administración online para el cuerpo de bomberos voluntarios de la Universidad Simón Bolívar.",
      project_text3  : "Sistema de gestión de programas analíticos de estudios.",
      project_text4  : "Sistema de gestión de ventas y préstamos de libros para el CEIC.",
      project_text5  : "Interpretador implementado en Ruby para el lenguaje Retina.",
      project_text6  : "Reproductor de música sencillo implementado en Python.",
      project_text7  : "Juego basado en Color Lines implementado en Python.",

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
      lang          : "<i class='fa fa-globe' aria-hidden='true'></i> español",
      cover_text0   : "Welcome!",
      cover_text1   : "My name is <strong>Carlos Serrada</strong>, and this is my portfolio",
      cover_button0 : "Download Resume",

      // About me section
      about_me       : "about me",
      about_me_text0 : "I am a computer engineering student at Venezuela's most prestigious university, Universidad Simón Bolívar (USB). I am currently in the fourth out of five years that make up the full length of \
                        the career. To this date I have approved many great subjects. However, the most relevant ones to me, because of the impact and importance they have had in my professional training are the \
                        following: symbolic logic, discrete mathematics, algorithms, operating systems, databases and software engineering.",
      about_me_text1 : "It is an honor to me being a student at a university which demands such high level of academic excellence, especially when taking into consideration the current situation the country where I \
                        live in is undergoing. However valuable what I have learned there, it does not fully quench my thirst for knowledge, which is why I have come to acquire the necessary information to become a \
                        developer, mostly by being self-taught and through participating in numerous projects and events.",
      about_me_text2 : "My search for knowledge has driven me to join the work force through web development, in which I have been specializing for some time now. I have concentrated in the front-end branch, however,\
                        I do not focus only in this area, I also have working knowledge of Back-end. Currently, one of my goals is to become a full-stack web developer.",
      about_me_text3 : "The aforementioned does not mean that my knowledge is limited to web development, as I am passionate about many other aspects, as a matter of fact; I have developed all kinds of software along \
                        the way. I consider myself to be talented, a fast learner, and I always try to give my best at work, which it is very easy to do it because I love what I do.",

      // Skills section
      skills       : "skills",
      skills_text0 : "I have many skills that allow me to perform a great deal of tasks related to software development. Among those skills, an advanced domain of multiple programming languages, web and desktop \
                      development frameworks, IDE's, DBMS and digital editing programs stand out.",
      skills_text1 : "Among the languages I currently master are: Python (which is my favorite), C / C ++, Ruby, Java, JavaScript, Bash, Matlab and assembling language. Regarding technologies for web development, I \
                      have a great command of HTML5, CSS3 and the aforementioned JavaScript, also complemented by the use of frameworks and libraries such as jQuery, AJAX, Bootstrap, AngularJS, django and WEB2PY.",
      skills_text2 : "I can also work with Qt framework in a very professional way to create interfaces for desktop programs, while usually pairing it with Python by using the PyQt library. In reference to databases, \
                      I have good knowledge for designing relations, models and their translation to SQL. I have only worked with PostgreSQL as a database manager, and in some cases I have used ORM's along with \
                      SQLAlchemy.",
      skills_text3 : "I'm a fan of version-control, as well as readability, modularization and code maintenance. I use git for all my projects, whether they are hosted on GitHub, Bitbucket or Gitlab. I have worked in \
                      several development environments like Eclipse, for instance,  but I prefer to use text editors like Sublime Text or Atom. I always write and comment my code in English, and I try to follow the \
                      recommended style for each language, although I always give it my personal touch to improve readability.",
      skills_text4 : "I really like designing and that is why I use programs like GIMP and Inkscape, although my mastery of them is, at the moment, very basic.",
      skills_text5 : "In addition to the information provided above, I have great command of many other programs; some of them are Microsoft Office, LibreOffice, WPS Office, Google Docs, StartUML, Dia, Visual \
                      Paradigm, DbVisualizer, Mars.",

      // Experience section
      experience       : "experience",
      experience_text0 : "I started programming at the age of 16, not much long before enrolling in university, the programming language that I started using back then was JavaScript, I did not choose it for any \
                          particular reason, I had only heard a lot about it, and I found it fun to learn. At the same time, without realizing it, I started learning a little of HTML and CSS as a complement to the \
                          scripts that I developed, and I did grand things such as a page that generates a random stories based upon certain questions asked to the users.",
      experience_text1 : "Four years have elapsed since then, and I have accumulated a lot of experience in both, my personal research and the numerous projects I have developed as required by academic subjects, and \
                          now in the labor world as well.",
      experience_text2 : "The first \"job\" I had was when I was chosen by my career mates as the Information and Technology Coordinator of the Simón Bolívar University Computer Engineering Center for the period \
                          2016-2017. I continue to hold this position and in order to carry the weight it entails I have had to learn a lot.",
      experience_text3 : "I had to design and organize competitive programming events, learn automation techniques and manage social networks for massive information dissemination, learn how to use django and other\
                          web development technologies to be able to maintain certain applications of the students center, and also develop a commercial, maintainable and multiplatform sales system.",
      experience_text4 : "At the end of the third year of the career, I participated in two software development projects required to pass certain subjects. Both projects were with real clients, but using different \
                          methodologies and technologies. In one of them I worked with django and in the other with web2py, in both I fulfilled the role of front-end developer, but in the second I also fulfilled as \
                          project leader role. I gained a lot of experience with these two projects and it was the first time I interacted with clients.",
      experience_text5 : "I recently joined the labor field officially and I am working on two web development projects, both with AngularJS and with excellent results.",

      // Projects section
      projects       : "projects",
      project_title0 : "GUIKIFIX",
      project_title1 : "INEA Tugs",
      project_title2 : "Apolo",
      project_title3 : "SIGPAE",
      project_title4 : "CEIC Suite",
      project_title5 : "Retyna",
      project_title6 : "PyCG Player",
      project_title7 : "Unlimited Lines & Rectangles",
      project_text0  : "",
      project_text1  : "System of management and control of activities for INEA.",
      project_text2  : "Online management system for the voluntary fire brigade of the Simón Bolívar University.",
      project_text3  : "System of management of analytical programs of studies.",
      project_text4  : "Sales and book lending management system for the CEIC.",
      project_text5  : "Interpreter implemented in Ruby for Retina language.",
      project_text6  : "Simple music player implemented in Python.",
      project_text7  : "Game based on Color Lines implemented in Python.",

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
