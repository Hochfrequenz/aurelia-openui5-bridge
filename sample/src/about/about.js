import { Ui5ToastService } from 'aurelia-openui5-bridge';
import { inject } from 'aurelia-dependency-injection';
@inject(Ui5ToastService)
export class About {
  _toastService = null;
  constructor(service) {
    this._toastService = service;
  }
  actors = [
    {
      'name': 'Bryan Cranston',
      'episodes': 62,
      'description': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',
      'image': 'bryan-cranston.jpg'
    }, {
      'name': 'Aaron Paul',
      'episodes': 62,
      'description': 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.',
      'image': 'aaron-paul.jpg'
    }, {
      'name': 'Bob Odenkirk',
      'episodes': 62,
      'description': 'Bob Odenkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".',
      'image': 'bob-odenkirk.jpg'
    }
  ];

  attached() {
    // let bridge = System.get(System.normalizeSync('aurelia-materialize-bridge'));
    // this.version = bridge.version;
    this.version = '0.24.0';
  }
  onTestPressed(e) {
    this._toastService.show("Testmessage", 3000);
  }
  onSelectionChanged(e) {
    let selected = this.list.getSelected();
    let names = selected.map(i => i.name);
    this.logger.log('selection changed: ' + names.join(', '));
    // this.logger.log(`selection changed ${e.detail.item.name}`);
  }
}
