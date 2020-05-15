# Terra Tree View

The TreeView component provides a way to render data in a hierarchical tree structure. Generally, the need for the Tree View Component is to represent a folder structure.  The structure will consist of two types of items: folders and leaf items.  A leaf item represents an individual file or document.  A folder is a structural item that can be used for grouping of leaf items and/or other folders.  A folder may be empty, such that there are no leaf items or other folders contained within it.  A folder may contain other folders (sub-folders), providing for a hierarchical structure.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-tree-view`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |



<!-- AUTO-GENERATED-CONTENT:END -->

## Dependencies

The TreeView component follows the Terra Internationalization guidelines at https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization to provide internationalized hover tooltips for
the icons used within the component.  Applications that use the TreeView component must also adhere to those guidelines in order to take
advantage of the internationalization support.


## Component Structure

Three components are provided so that you can lay out your data in a hierarchical structure: a root component, a folder component and a leaf item component.
Three sets of the three components are provided to handle the three different selection models that are supported:
- The TreeView component should be used when multiple-selection capabilities are required. The TreeView component is considered "uncontrolled", meaning that the consuming application has no control over the selections. The TreeView component manages the user selections internally.  This is the default selection model.  The selection behavior for the default selection model are as follows:
  - When the user selects a folder, then all descendants of that folder at all levels are also marked as selected.
  - When the user unselects a folder, then all descendants of that folder at all levels are also marked as unselected.
  - When a folder is selected and one of its children is unselected, then the folder is also marked as unselected. If that folder is a sub-folder and its parent folder was selected, then the parent folder is also unselected, and so on up the hierarchy.
  - When a folder is unselected and the user selects all of its children, then the folder is also marked as selected.
  - When the user checks the "select-all" checkbox in the TreeView header, then all folders and leaf items at all levels are marked as selected.
  - When the user unchecks the "select-all" checkbox in the TreeView header, then all folders and leaf items at all levels are marked as unselected.
  - When the "select-all" checkbox is checked and the user unselects any folder or leaf item, then the "select-all" checkbox is unchecked.
  - When the "select-all" checkbox is unchecked and the user manually causes all folders and leaf items to be selected, then the "select-all" checkbox is checked.
- The SingleSelectTreeView component should be used when single-selection capabilities are required.  The SingleSelectTreeView component is considered "uncontrolled", meaning that the consuming application has no control over the selections.  The SingleSelectTreeView component manages the user selections internally. The selection behavior for the single-select selection model are as follows:
  - There are no checkboxes on the rows of the component, nor on the component header.
  - The user can click anywhere on the row representing a folder or leaf item, except on the expand/collapse chevron or the actions section of the row, in order to select the row.
  - Selection is not a toggle, so if you click on a selected row, it will not be unselected.
  - When you select a row the previously selected row, if there was one, will be unselected.
  - Selecting a folder does not cause its descendants to be selected.  Only one row in the component can be selected at a time.
- When the above selection models don't meet your application's needs and your application needs to manage the selections itself, then the TreeViewBase component should be used. The TreeViewBase component is considered "controlled", meaning that the consuming application has full control to manage the selections. The TreeViewBase component maintains no state regarding the selections and relies on the application to identify which folders and leaf items should be marked as selected via props.

In order to provide these three selection models, there are three sets of structural components that can be used.

If you want to use the default selection model with multi-select capabilities and don't need your application component to control the selections, then use the TreeView version of the component via these JSX tags.
- `<TreeView>`: the root component
- `<TreeView.Folder>`: the folder component
- `<TreeView.Item>`: the leaf item component

If you want single-selection capabilities, then use the SingleSelectTreeView version of the component via these JSX tags.
- `<SingleSelectTreeView`: the root component
- `<SingleSelectTreeView.Folder`: the folder component
- `<SingleSelectTreeView`: the leaf item component

If you want multi-selection capabilities and you want to use the `controlled` version of the component so that your application component can have full control of managing the selections, then use these JSX tags.
- `<TreeViewBase>`: the root component
- `<TreeViewBase.Folder>`: the folder component
- `<TreeViewBase.Item>`: the leaf item component

If you do not want selection capabilities at all, then you should use the `<TreeView>` version and omit the selectionEnabled prop.



## Usage

In the usage example below, the TreeView component is configured with the following features;
- The `<TreeView>` component is used so that the `uncontrolled` multi-selection model is in effect.  The TreeView component will manage the selections within the tree.
- The title "Test Tree" is displayed in the component header.
- Selection is enabled with the 'uncontrolled' multi-selection model by setting the `selectionEnabled` prop. When the component is initially rendered, the following folders/items are marked as selected due to the isInitiallySelected props assigned.
  - "Item 1"
  - "Folder 1", this causes all of its descendants to be marked as selected as well when the component is initially rendered so that it adheres to the rules of the default multi-selection model.
  - "Folder 3 / Item 1" and "Folder 3 / Item 2", this causes "Folder 3" to be marked as selected as well when the component is initially rendered so that it adheres to the rules of the default multi-selection model.
- the application is informed when the following occurs via the callback props provided.
  - onExpand: when a folder is expanded
  - onCollapse: when a folder is collapsed
  - onSelect: when a folder or leaf item is selected
  - onUnselect: when a folder or leaf item is unselected
  - onSelectAll: when the user checks the "select all" checkbox in the component's header
  - onUnselectAll: when the user unchecks the "select all" checkbox in the component's header

```jsx
import React from 'react';
import TreeView from 'terra-tree-view';

<TreeView
  onExpand={this.handleFolderExpand}
  onCollapse={this.handleFolderCollapse}
  onSelect={this.handleOnSelect}
  onUnselect={this.handleOnUnselect}
  onSelectAll={this.handleOnSelectAll}
  onUnselectAll={this.handleOnUnselectAll}
  title="Test Tree"
  selectionEnabled
>
  <TreeView.Item id="i1" text="Item 1" isInitiallySelected />
  <TreeView.Item id="i2" text="Item 2" />
  <TreeView.Folder id="f1" text="Folder 1" isInitiallySelected >
    <TreeView.Item id="f1_i1" text="Folder 1 / Item 1" />
    <TreeView.Item id="f1_i2" text="Folder 1 / Item 2" />
    <TreeView.Folder id="f1a" text="Folder 1a">
      <TreeView.Item id="f1a_i1" text="Folder 1a / Item 1" />
      <TreeView.Item id="f1a_i2" text="Folder 1a / Item 2" />
    </TreeView.Folder>
    <TreeView.Folder id="f1b" text="Folder 1b">
      <TreeView.Item id="f1b_i1" text="Folder 1b / Item 1" />
      <TreeView.Item id="f1b_i2" text="Folder 1b / Item 2" />
      <TreeView.Folder id="f_1ba" text="Folder 1ba with extra text to cause truncation">
        <TreeView.Item id="f1ba_i1" text="Folder 1ba / Item 1" />
        <TreeView.Item id="f1ba_i2" text="Folder 1ba / Item 2 with extra text to cause truncation" />
      </TreeView.Folder>
    </TreeView.Folder>
  </TreeView.Folder>
  <TreeView.Folder id="f2" text="Folder 2" >
    {folder2Contents}
  </TreeView.Folder>
  <TreeView.Folder id="f3" text="Folder 3">
    <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
    <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
  </TreeView.Folder>
</TreeView>
```

## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
 -->
