const estudantes = [
  {
    aluno : 'Diogo',
    n1: '10',
    n2:'7.5'
  },
  {
    aluno : 'Junior',
    n1: '5',
    n2: '4.5'
  },
  {
    aluno : 'Clovis',
    n1: '9.5',
    n2:'6.5'
  }
]



function media(n1, n2) {
n1 = Number(n1);
n2 = Number(n2)

  return ((n1 + n2) / 2)
}



function printMedia(estudantes) {
  if(media < 7 ){
    return `
    O Estudante ${estudantes.aluno} possuia media de ${media(estudantes.n1, estudantes.n2)}    Não foi dessa vez, tente novamente
    `
  }
  else{
    return `
    O Estudante ${estudantes.aluno} possuia media de ${media(estudantes.n1, estudantes.n2)}
    PARABENS !!!!!!
    `
  }
}

for (let estudante of estudantes) {
  let exibe = printMedia(estudante);
  alert(exibe);
}

