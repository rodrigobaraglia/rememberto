export class Task {
  constructor(
    id,
    title,
    status = "todo",
    description = "",
    conditions = [],
    activity = []
  ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;
    this.conditions = conditions;
    this.activity = activity;
  }

  setDescription = description => (this.description = description);
  setConditions = conditions => (this.conditions = conditions);
  setActivity = activity => (this.activity = activity);
}

export class Condition {
  constructor(title, status = false) {
    this.title = title;
    this.status = status;
  }
  toggleStatus = () => (this.status = !this.status);
}
