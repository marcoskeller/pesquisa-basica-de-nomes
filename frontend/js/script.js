
//---------Variáveis Globais
  //var resource = fetch('http://localhost:3001/users');
  //var baseDados = resource.json();
  var digitacaoUsuario;



//-------Função Que Inicia Nosso Programa--------------
// function start(){
//   console.log('Página Carregada!')

//   var usuarios = fetch('http://localhost:3001/users').then(function(resource){
//     resource.json().then(function(users){
//       //console.log(users);
//       //renderUsers(users);
//     });
//   });
//   //console.log(users.first.name); 
// }


//Variaves com Escopo Global


//-------Função Que Inicia Nosso Programa--------------
async function start(){
  console.log('Página Carregada!')

  var resource = await fetch('http://localhost:3001/users');
  var baseDados = await resource.json();
  
  preventFormSubmit()
  activateInput()
  //renderUsers();
  pesquisarUsuarios();
  render();

}

//------------Função Para Renderizer Todo a Base de Dados--------------
async function renderUsers(){
  var resource = await fetch('http://localhost:3001/users');
  var baseDados = await resource.json();
  
  console.log(baseDados);
}


//----------Função Para Pesquisar Todos os Nomes da Base de Dados-------
async function pesquisarUsuarios(){
  var resource = await fetch('http://localhost:3001/users');
  var baseDados = await resource.json();
  
  
  const buscarNomes = baseDados.map(person => {
    return{
      name:person.name.first,
      idade: person.registered.age,
      sexo: person.gender
       };
       console.log(buscarNomes);
    })

  

  const pesquisarNome = buscarNomes.filter(person =>{
  
    return person.idade === 14;

  })
  
  //console.log(baseDados);
  console.log(pesquisarNome);
  //console.log(buscarNomes);
   
}

  

//----------Função Para Interação com o Formulário-------
function preventFormSubmit(){
  function LidarFormSubmit(event){
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', LidarFormSubmit)
}

//----------Função Para Deixar o Input Destacado Ao Iniciar a Pagina-------
function activateInput(){
  function lidarDigitacao(event){
    var itemDigitado;
    if(event.key === 'Enter')
    {
      itemDigitado = event.target.value;
      //return itemDigitado;      
    }
  //render();   
  console.log(itemDigitado);
  }
  inputName.addEventListener('keyup', lidarDigitacao);
  inputName.focus();
  
}

//------------Esta Função e para atualizar a tela com  os novos dados--------------
async function render(){
  var resource = await fetch('http://localhost:3001/users');
  var baseDados = await resource.json();
  
 
  
  var divNames = document.querySelector('#names');
  divNames.innerHtml = '<ul><li>Nome</li><li>Nome 2<li></ul>';

  var ul = document.createElement('ul');
  
  //Método para Percorrer nossa Base de Dados
  for(var i = 0; i < baseDados.length; i++)
  {
    var currenteName = baseDados[i];
    var li = document.createElement('li');
    li.textContent = currenteName.name.first + " " +  currenteName.name.last;
    ul.appendChild(li);
    
    //console.log(li);
  }
  
  //divNames.appendChild(ul);
}





start();

