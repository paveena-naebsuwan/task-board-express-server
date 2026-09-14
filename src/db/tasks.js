const tasks = [
  {
    id: 1,
    title: "Göra soundcheck på stora scenen",
    description: "Kontrollera mikrofoner och gitarrförstärkare med bandet.",
    assignee: "Po",
    category: "Scen",
    priority: "Hög",
    status: "todo",
  },
  {
    id: 2,
    title: "Bygga upp VIP-området",
    description: "Montera tält, stolar och belysning vid huvudentrén.",
    assignee: "Po",
    category: "Bygge",
    priority: "Hög",
    status: "doing",
  },
  {
    id: 3,
    title: "Boka huvudsponsoren",
    description: "Skriva på avtal med dryckesleverantören för festivalen.",
    assignee: "Mey",
    category: "Ekonomi",
    priority: "Hög",
    status: "done",
  },
  {
    id: 4,
    title: "Trycka ut gästlistor och VIP-armband",
    description: "Hämta ut trycksakerna i entrékontoret och sortera.",
    assignee: "Mey",
    category: "Logistik",
    priority: "Medium",
    status: "todo",
  },
  {
    id: 5,
    title: "Bygglov och tillstånd",
    description: "Klart med polistillstånd och kommunen för insläpp.",
    assignee: "Mey",
    category: "Administration",
    priority: "Hög",
    status: "done",
  },
  {
    id: 6,
    title: "Testa ljusriggen",
    description:
      "Köra igenom programmerade ljusshow-scener för kvällens konsert.",
    assignee: "Charlie",
    category: "Scen",
    priority: "Medium",
    status: "doing",
  },
  {
    id: 7,
    title: "Köra ut vatten till backstage",
    description: "Se till att det finns kylt dricksvatten i alla artistvagnar.",
    assignee: "Sam",
    category: "Service",
    priority: "Låg",
    status: "todo",
  },
  {
    id: 8,
    title: "Sätta upp stängsel runt området",
    description: "Kravallstaket ska placeras ut runt matvagnarna.",
    assignee: "Leo",
    category: "Säkerhet",
    priority: "Hög",
    status: "doing",
  },
  {
    id: 9,
    title: "Skicka ut pressmeddelande",
    description: "Gå ut med sista spelschemat till tidningar och media.",
    assignee: "Sam",
    category: "Marknad",
    priority: "Medium",
    status: "done",
  },
];

export function getAllTasks() {
  return tasks;
}

export function createTask(task) {
  const newTask = {
    ...task,
    id: tasks[tasks.length - 1].id + 1,
  };

  tasks.push(newTask);

  return newTask;
}
