class Team {
  constructor() {
    this.members = [];
  }

  add(hero) {
    this.members.push(hero);
  }

  [Symbol.iterator]() {
    const heroes = this.members;
    let nextIndex = 0;
    return {
      next() {
        if (nextIndex >= heroes.length) {
          return {
            value: undefined,
            done: true,
          };
        }

        const currentIndex = nextIndex;
        nextIndex += 1;
        return {
          value: heroes[currentIndex],
          done: false,
        };
      },
    };
  }
}
const team = new Team();

team.add({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

for (const member of team) {
  console.log(member.name, member.health, member.attack);
}
