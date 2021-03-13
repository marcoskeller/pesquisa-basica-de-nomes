
//---------Variáveis Globais
  //var resource = fetch('http://localhost:3001/users');
  //var baseDados = resource.json();



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


//-------Função Que Inicia Nosso Programa--------------
async function start(){
  console.log('Página Carregada!')

  var resource = await fetch('http://localhost:3001/users');
  var baseDados = await resource.json();
  
  //renderUsers();
  pesquisarUsuarios();

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
    idade: person.registered.age
     };
  })
  
  console.log(buscarNomes);
}


start();

