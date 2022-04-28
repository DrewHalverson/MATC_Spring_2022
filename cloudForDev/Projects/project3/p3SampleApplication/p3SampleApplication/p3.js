let url =
  " https://h9umb5xez9.execute-api.us-east-1.amazonaws.com/baseballStats";

const init = () => {
  document.querySelector("#addTeam").addEventListener("click", addNewTeam);

  fetch(url)
    .then(data => data.json())
    .then(baseballStats => {
      let teams = baseballStats.Items.filter(item =>
        item.TeamID.startsWith("TEAMINFO")
      );

      outputTeams(teams);

      let players = baseballStats.Items.filter(item =>
        item.TeamID.startsWith("PLAYERINFO")
      );

      outputPlayers(players);
    })
    .catch(ex => {
      console.error(ex);
    });
};

const addNewTeam = () => {
  let params = {
    TeamID: document.querySelector("#teamID").value,
    SK: document.querySelector("#sk").value,
    TeamName: document.querySelector("#teamName").value
  };

  fetch(url, {
    method: "post",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //add the record to the existing table
      let teamsTable = document.querySelector("#teams tbody");

      teamsTable.appendChild(buildTeamTableRow(params));
    })
    .catch(ex => {
      console.error(ex);
    });
};

const outputPlayers = players => {
  let playersTable = document.querySelector("#players tbody");

  players.map(player => {
    let row = document.createElement("tr");
    let teamId = document.createElement("td");
    teamId.textContent = player.TeamID;
    row.appendChild(teamId);
    let sk = document.createElement("td");
    sk.textContent = player.SK;
    row.appendChild(sk);
    let playerName = document.createElement("td");
    playerName.textContent = player.PlayerName;
    row.appendChild(playerName);
    let position = document.createElement("td");
    position.textContent = player.Position;
    row.appendChild(position);
    playersTable.appendChild(row);
  });
};

const outputTeams = teams => {
  let teamsTable = document.querySelector("#teams tbody");

  teams.map(team => {
    teamsTable.appendChild(buildTeamTableRow(team));
  });
};

const buildTeamTableRow = team => {
  let row = document.createElement("tr");
  let teamId = document.createElement("td");
  teamId.textContent = team.TeamID;
  row.appendChild(teamId);
  let sk = document.createElement("td");
  sk.textContent = team.SK;
  row.appendChild(sk);
  let teamName = document.createElement("td");
  teamName.textContent = team.TeamName;
  row.appendChild(teamName);
  return row;
};

window.addEventListener("load", init);
