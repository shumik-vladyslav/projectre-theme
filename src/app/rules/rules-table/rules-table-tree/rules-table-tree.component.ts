import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeModel, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-rules-table-tree',
  templateUrl: './rules-table-tree.component.html',
  styleUrls: ['./rules-table-tree.component.css']
})


export class RulesTableTreeComponent implements OnInit {
  @ViewChild('tree') tree;

  randomID;
  ruleName;
  description;
  rules = [];
  treeModel: TreeModel;
  treeActionDropDown = 'AND';
  treeActionData = ['AND', 'OR'];
  nodesTree = [
    {
      id: 1,
      isExpanded: false,
      rightClickEvent: false,
      treeActionDropDown : 'AND',
      children: [
        {
          id: 2,
          isExpanded: false,
          rightClickEvent: false,
          treeActionDropDown : 'AND',
          children: [
            {
              id: 3,
              isExpanded: false,
              rightClickEvent: false,
              name: ''
            }
          ]
        },
        {
          id: 4,
          isExpanded: false,
          rightClickEvent: false,
          treeActionDropDown : 'AND',
          children: [
            {
              id: 5,
              isExpanded: false,
              rightClickEvent: false,
              name: ''
            }
          ]
        }
      ]
    },
  ];
  options: ITreeOptions = {
    useCheckbox: true,
    useTriState: false
  };

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.nodesTree[0]);
    this.randomID = this.getRandomID();
  }

  onRightClick(e, node) {
    console.log(e.button);

    node.data.rightClickEvent = true;
    console.log(node.data.rightClickEvent);

    return false;
}

  nodeExpanded(e, node) {
    console.log(e);
    console.log(node);
    const nodeID = e.node.data.id;
    this.tree.treeModel.getNodeById(nodeID).data.isExpanded = e.isExpanded;
  }

  getRandomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  newButton() {
    this.rules.push(
      {
        ruleID: this.randomID,
        ruleName: this.ruleName,
        description: this.description
      }
    );
    this.clearButton();
  }

  clearButton() {
    this.randomID = this.getRandomID();
    this.ruleName = null;
    this.description = null;
  }
}
