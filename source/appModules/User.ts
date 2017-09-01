export default class User {
  id: number;
  username: string;
  items: Set<string>;
  interval: number;

  constructor(message: {id: number, username: string}, sendCb: any) {
    this.interval = 10 * 1000;
    this.id = message.id;
    this.username = message.username;
    this.items = new Set();

    setInterval(() => {
      sendCb(this.id, 'this.getAllReminders()');
    }, this.interval)
  }

  addReminder(message: string) {
    this.items.add(message);
  }

  getAllReminders() {
    return [...this.items.values()].join('\n');
  }
}