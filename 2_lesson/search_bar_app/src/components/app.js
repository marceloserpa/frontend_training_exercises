
import React, { Component } from "react";
import List from "./list";
import SearchBar from "./search-bar";


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      yugiohCardFiltered : yugiohCards,
      yugiohCards
    };

  }

  filter(term){
    let updateList = this.state.yugiohCards.filter(card => {
      return card.name.toLowerCase().search(term.toLowerCase()) !== -1;
    });
    this.setState({yugiohCardFiltered: updateList});
  }

  render(){
    return (
      <div>
        <SearchBar filter={this.filter.bind(this)} className="col-xs-12" />
        <List itens={this.state.yugiohCardFiltered} />
      </div>
    );
  }

}


const yugiohCards = [
  { id: "SDY-001", name: "Mystical Elf"},
  { id: "SDY-002", name: "Feral Imp"},
  { id: "SDY-003", name: "Winged Dragon, Guardian of the Fortress #1"},
  { id: "SDY-004", name: "Summoned Skull"},
  { id: "SDY-005", name: "Beaver Warrior"},
  { id: "SDY-006", name: "Dark Magician"},
  { id: "SDY-007", name: "Gaia the Fierce Knight"},
  { id: "SDY-008", name: "Curse of Dragon"},
  { id: "SDY-009", name: "Celtic Guardian"},
  { id: "SDY-010", name: "Mammoth Graveyard"},
  { id: "SDY-011", name: "Great White"},
  { id: "SDY-012", name: "Silver Fang"},
  { id: "SDY-013", name: "Giant Soldier of Stone"},
  { id: "SDY-014", name: "Dragon Zombie"},
  { id: "SDY-015", name: "Doma the Angel of Silence"},
  { id: "SDY-016", name: "Ansatsu"},
  { id: "SDY-017", name: "Witty Phantom"},
  { id: "SDY-018", name: "Claw Reacher"},
  { id: "SDY-019", name: "Mystic Clown"},
  { id: "SDY-020", name: "Sword of Dark Destruction"}
];

export default App;
