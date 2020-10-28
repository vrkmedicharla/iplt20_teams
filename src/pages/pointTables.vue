<template>
  <div>
    <div class="q-mx-md">
      <h4>Points Table</h4>
    </div>
    <div>
      <div class="q-pa-md">
        <q-markup-table flat bordered>
          <thead class="bg-teal">
            <tr>
              <th></th>
              <th class="text-left">Team</th>
              <th class="text-left">Pld</th>
              <th class="text-left">Won</th>
              <th class="text-left">Lost</th>
              <th class="text-left">Tied</th>
              <th class="text-left">N/R</th>
              <th class="text-left">Net RR</th>
              <th class="text-left">Pts</th>
              <th colspan="5" class="text-center">Form</th>
            </tr>
          </thead>
          <tbody class="bg-grey-3">
            <tr v-for="(points, i) in pointTables" :key="i">
              <td class="text-left">{{ i + 1 }}</td>
              <td
                cass="text-left"
                style="cursor: pointer"
                @click="getTeam(points)"
              >
                {{ points.TeamName }}
              </td>
              <td cass="text-left">{{ points.played }}</td>
              <td cass="text-left">{{ points.Won }}</td>
              <td cass="text-left">{{ points.Lost }}</td>
              <td cass="text-left">{{ points.Tied }}</td>
              <td cass="text-left">{{ points.Nr }}</td>
              <td cass="text-left">{{ points.NetRR }}</td>
              <td cass="text-left">{{ points.Pts }}</td>
              <td cass="text-left">
                <ul>
                  <li
                    v-for="(form, i) in points.Form"
                    :key="i"
                    class="team-form"
                    v-bind:class="{
                      wonMatch: form == 'W',
                      lostMatch: form == 'L',
                    }"
                  >
                    {{ form }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pointTables: [
        {
          TeamName: "Mumbai Indians",
          teamId: "6",
          played: "11",
          Won: "7",
          Lost: "4",
          Tied: "0",
          Nr: "0",
          NetRR: "+1.252",
          Pts: "14",
          Form: ["W", "W", "L", "W", "L"],
        },

        {
          TeamName: "Delhi Capitals",
          teamId: "3",
          played: "11",
          Won: "7",
          Lost: "4",
          Tied: "0",
          Nr: "0",
          NetRR: "	+0.434",
          Pts: "14",
          Form: ["L", "W", "L", "L", "L"],
        },

        {
          TeamName: "Royal Challengers Bangalore",
          teamId: "9",
          played: "11",
          Won: "7",
          Lost: "4",
          Tied: "0",
          Nr: "0",
          NetRR: "+0.092",
          Pts: "14",
          Form: ["W", "L", "W", "W", "L"],
        },

        {
          TeamName: "Kings XI Punjab",
          teamId: "4",
          played: "12",
          Won: "6",
          Lost: "6",
          Tied: "0",
          Nr: "0",
          NetRR: "-0.049",
          Pts: "12",
          Form: ["W", "W", "W", "W", "W"],
        },

        {
          TeamName: "Kolkata Knight Riders",
          teamId: "5",
          played: "12",
          Won: "6",
          Lost: "6",
          Tied: "0",
          Nr: "0",
          NetRR: "-0.479",
          Pts: "12",
          Form: ["L", "W", "L", "W", "L"],
        },

        {
          TeamName: "Rajasthan Royals",
          teamId: "8",
          played: "12",
          Won: "5",
          Lost: "7",
          Tied: "0",
          Nr: "0",
          NetRR: "-0.505",
          Pts: "10",
          Form: ["L", "L", "W", "L", "W"],
        },

        {
          TeamName: "Sunrisers Hyderabad",
          teamId: "62",
          played: "11",
          Won: "4",
          Lost: "7",
          Tied: "0",
          Nr: "0",
          NetRR: "+0.029",
          Pts: "8",
          Form: ["L", "L", "L", "W", "L"],
        },

        {
          TeamName: "Chennai Super Kings",
          teamId: "1",
          played: "12",
          Won: "4",
          Lost: "8",
          Tied: "0",
          Nr: "0",
          NetRR: "-0.602",
          Pts: "8",
          Form: ["W", "L", "L", "L", "W"],
        },
      ],
    };
  },

  methods: {
    getTeam(points) {
      this.$router.push("/teams/" + points.teamId + "/" + points.TeamName);
    },
  },
};
</script>

<style scoped>
.wonMatch {
  max-width: 10% !important;

  padding: 6px;
  color: white;
  background-color: green;
  border: 1px solid black;
}
.lostMatch {
  max-width: 10% !important;

  padding: 6px;
  color: white;
  background-color: red;
  border: 1px solid black;
}

.team-form {
  display: inline-block;
  border-radius: 0.3rem;
  margin-right: 0.4rem;
  min-width: 1.8rem;
}
ol li,
ul li {
  list-style-type: none;
}
</style>
