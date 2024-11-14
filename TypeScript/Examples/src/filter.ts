// Define the Agent interface

export interface Agent {
  managementAdminADGroup: string;
  userADGroup: string;
  agentAdminADGroup: string;
}

export interface AgentReduced {
  userADGroup: string;
}

// Sample data
const agents: Agent[] = [
  {
    managementAdminADGroup: "PRIV-AIDA-dev-Health_Science-admin",
    userADGroup: "PRIV-AIDA-dev-Business_Law-users",
    agentAdminADGroup: "PRIV-AIDA-dev-Science_Engineering-agent-admin",
  },
  {
    managementAdminADGroup: "PRIV-AIDA-dev-LITEC-admin",
    userADGroup: "PRIV-AIDA-dev-Health_Science-users",
    agentAdminADGroup: "PRIV-AIDA-dev-Engineering-agent-admin",
  },
  {
    managementAdminADGroup: "PRIV-AIDA-dev-Medicine-admin",
    userADGroup: "PRIV-AIDA-dev-Arts-users",
    agentAdminADGroup: "PRIV-AIDA-dev-Science-agent-admin",
  },
];

const userGroups: string[] = [
  "PRIV-AIDA-dev-Health_Science-admin",
  "PRIV-AIDA-dev-LITEC-admin",
  "PRIV-AIDA-dev-Health_Science-users",
  "PRIV-AIDA-dev-Science-agent-admin",
];

const mapToAgentReduced = (items: Agent[]): AgentReduced[] => {
  return items.map((item) => ({
    ...item,
  }));
};
// Function to filter agents
const filterAgentsByUserGroups = (
  agents: Agent[],
  userGroups: string[]
): AgentReduced[] => {
  const agentList = agents.filter(
    (agent) =>
      userGroups.includes(agent.managementAdminADGroup) ||
      userGroups.includes(agent.userADGroup) ||
      userGroups.includes(agent.agentAdminADGroup)
  );

  const agentList2: AgentReduced[] = mapToAgentReduced(agentList);
  return agentList2;
};

// Usage
const matchingAgents: AgentReduced[] = filterAgentsByUserGroups(
  agents,
  userGroups
);
console.log(matchingAgents);
