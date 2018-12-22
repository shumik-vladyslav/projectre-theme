import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeModel, ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-rules-table-tree2',
  templateUrl: './rules-table-tree2.component.html',
  styleUrls: ['./rules-table-tree2.component.css']
})
export class RulesTableTree2Component implements OnInit {
  @ViewChild('tree') tree;

  randomID;
  ruleName;
  description;
  rules = [];
  treeModel: TreeModel;
  treeActionDropDown = 'AND';
  treeActionData = ['AND', 'OR', 'Add Row', 'Add Rule', 'Add Nested Row'];
  numberRows = ['row'];
  numberRules = ['rule'];
  numberNestedRows = ['nested'];
  nodesTree = [];
  options: ITreeOptions = {
    useTriState: false
  };

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() {
    this.nodesTree.push(
      {
        id: 1,
        isExpanded: false,
        rightClickEvent: false,
        treeActionDropDown: 'AND',
        numberRules: ['rule'],
        children: [
          {
            id: 2,
            name: '',
            isExpanded: false,
            rightClickEvent: false,
            treeActionDropDown: 'AND',
            children: [{}]
          },
          // {
          //   id: 4,
          //   isExpanded: false,
          //   rightClickEvent: false,
          //   treeActionDropDown: 'AND',
          //   children: [{}]
          // }
        ]
      },
    );
    console.log(this.nodesTree);
    
  }

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

  nodeExpanded(e) {
    console.log(e);
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

  selectTreeActionDropDwon(item, node) {
    if (item === 'AND' || item === 'OR') {
      return item;
    } else {
      if (item === 'Add Row') {
        this.addRow();
        return node.data.treeActionDropDown;
      }
      if (item === 'Add Rule') {
        this.addRule(node);
        return node.data.treeActionDropDown;
      }
      if (item === 'Add Nested Row') {
        this.addNestedRow(node);
        return node.data.treeActionDropDown;
      }
    }
  }

  addRow() {
    console.log('addRow');
    this.nodesTree.push({
      isExpanded: false,
      rightClickEvent: false,
      treeActionDropDown: 'AND',
      numberRules: ['rule'],
      children: [{}]
    });
    this.tree.treeModel.update();
    console.log(this.nodesTree);
  }

  addRule(node) {
    console.log('addRule');
    node.data.numberRules.push('rule');
  }

  addNestedRow(node) {
    console.log('addNestedRow');
    node.data.children.push({
      name: '',
      isExpanded: false,
      rightClickEvent: false,
      treeActionDropDown: 'AND',
      children: [{}]
    });
    this.tree.treeModel.update();
  }
}
