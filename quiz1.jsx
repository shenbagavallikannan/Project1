
 const quiz1 = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 15,
    perQuestionScore: 15,
    questions: [
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
      {
      question: 'Which of the following is used in React.js to increase performance?',
      choices:['Virtual DOM','Original DOM','Both A and B','None of the above'],
      type:'MCQs',
      correctAnswer:'Virtual DOM',
      },
      {
        question:'What is ReactJS?',
        choices:['Server-side framework','User interface framework','Both a and b','None of the above'],
        type:'MCQs',
        correctAnswer:'User interface framework',
      },
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      
      {
        question:'Who created React.js?',
        choices:['Jordan Mike','Jordan Walke','Tim Lee','Jordan Lee'],
        type:'MCQs',
        correctAnswer:'Jordan Walke',
      },
      {
        question:'What is Babel?',
        choices:['JavaScript compiler','JavaScript interpreter','JavaScript transpiler','None of above'],
        type:'MCQs',
        correctAnswer:'JavaScript compiler',
      },
      {
        question:'Identify the command used to create a react app.',
        choices:['npm install create-react-app','npm install -g create-react-app','install -g create-react-app','None of above'],
        type:'MCQs',
        correctAnswer:'npm install -g create-react-app',
      },
      {
        question:'How many elements can a vaild react component return?',
        choices:['1','2','3','4'],
        type:'MCQs',
        correctAnswer:'1',
      },
      {
        question:'Props are method into other components?',
        choices:['True','False'],
        type:'MCQs',
        correctAnswer:'True',
      },
      {
        question:'Identify the smallest building block of React.JS?',
        choices:['Props','Elements','Components','None of the above'],
        type:'MCQs',
        correctAnswer:'Components',
      },
      {
        question:'Total ways of defining variables in ES6 is?',
        choices:['1','2','3,','4'],
        type:'MCQs',
        correctAnswer:'3',
      },
      {
        question:'ES6 stands for________?',
        choices:['ECMA 6','ECMAJavaScript 6','ECMAScript 6','EJavaScript 6'],
        type:'MCQs',
        correctAnswer:'ECMAScript 6',
      },
      {
        question:"Identify the one which is used to pass data to components from outside.",
        choices:['Render with arguments','setState','PropTypes','props'],
        type:'MCQs',
        correctAnswer:'props',
      },
    ],
  }
  export default quiz1;