import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    `,

  data() {
    return {
      assignments: [
        { name: "finish project", complete: false, id: 1 },
        { name: "read chapter 4", complete: false, id: 2 },
        { name: "turn in homework", complete: false, id: 3 },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
};
