
# 🚀 Rocket Todo

![Versão](https://img.shields.io/badge/version-0.0.0-blue.svg)
![Licença](https://img.shields.io/badge/license-MIT-green.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

Projeto desenvolvido durante as aulas da Rocketseat, como prática para consolidar conceitos de React, TypeScript e Vite.

## ✨ O que o projeto faz

Rocket Todo é um gerenciador de tarefas minimalista e rápido, que permite criar, editar, marcar como concluídas e excluir tarefas. Ideal para organizar seu dia a dia de forma simples e eficiente.

## 🚀 Principais recursos e benefícios

- Adição, edição e remoção de tarefas
- Marcação de tarefas como concluídas
- Contador de tarefas criadas e concluídas
- Feedback visual de carregamento e ações
- Interface responsiva e acessível
- Componentização reutilizável
- Persistência local das tarefas (localStorage)

## 🛠️ Como começar

### Pré-requisitos

- Node.js >= 18
- npm >= 9

### Instalação

```bash
git clone https://github.com/deniscapelete/rocket_todo.git
cd rocket_todo
npm install
```

### Executando em modo desenvolvimento

```bash
npm run dev
```
Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

### Exemplo de uso

```tsx
// Adicionando uma nova tarefa
import useTask from './src/hooks/use-task'

const { prepareTask } = useTask()
prepareTask() // Cria uma tarefa em branco para edição

// Listando tarefas
import useTasks from './src/hooks/use-tasks'
const { tasks } = useTasks()
console.log(tasks)
```