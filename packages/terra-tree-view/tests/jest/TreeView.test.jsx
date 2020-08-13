import React from 'react';
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconOverDue from 'terra-icon/lib/icon/IconOverDue';
import IconDueSoon from 'terra-icon/lib/icon/IconDueSoon';
import TreeView from '../../src/TreeView';
import TreeViewBase from '../../src/TreeViewBase';
import SingleSelectTreeView from '../../src/SingleSelectTreeView';

// Required  for checkbox
window.matchMedia = () => ({ matches: true });

describe('TreeView with no props or children', () => {
  const defaultRender = <TreeView /> ;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mountWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error on missing locale prop in Base', () => {
    try {
      render(<TreeView />);
    } catch (e) {
      expect(e.message).toContain('Component is internationalized, and must be wrapped in terra-base');
    }
  });
});


describe('TreeViewBase with no props or children', () => {
  const defaultRender = <TreeViewBase />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mountWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error on missing locale prop in Base', () => {
    try {
      render(<TreeViewBase />);
    } catch (e) {
      expect(e.message).toContain('Component is internationalized, and must be wrapped in terra-base');
    }
  });
});

describe('Empty TreeView with title', () => {
  const treeViewTitleRender = <TreeView title="test-title" />;

  // Snapshot Tests
  it('should render a empty tree with title in header', () => {
    const wrapper = mountWithIntl(treeViewTitleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with selection enabled', () => {
  const treeViewSelectionEnabledRender = (
    <TreeView
        title="test-title"
        selectionEnabled
    />
   
  );

  const newLocal = 'should render a empty tree with checkbox in header';
  // Snapshot Tests
  it(newLocal, () => {
    const wrapper = mountWithIntl(treeViewSelectionEnabledRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView with dummy event callbacks', () => {
  const treeViewCallbacksRender = (
    
      <TreeView
        title="test-title"
        onExpand={() => {}}
        onCollapse={() => {}}
        onExpandAll={() => {}}
        onCollapseAll={() => {}}
        onSelect={() => {}}
        onSelectAll={() => {}}
        onUnselect={() => {}}
        onUnselectAll={() => {}}
        onDoubleClick={() => {}}
        onBeginHover={() => {}}
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" />
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a empty tree with callbacks', () => {
    const wrapper = mountWithIntl(treeViewCallbacksRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with singleRootExpansion turned on', () => {
  const treeViewSingleRootExpansionRender = (
    
      <TreeView
        title="test-title"
        singleRootExpansion
      />
   
  );

  // Snapshot Tests
  it('should render a empty tree with singleRootExpansion turned on', () => {
    const wrapper = mount(treeViewSingleRootExpansionRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with isAllInitiallySelected turned on', () => {
  const treeViewIsAllInitiallySelectedRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
        isAllInitiallySelected
      />
   
  );

  // Snapshot Tests
  it('should render a empty tree with isAllInitiallySelected turned on - checkbox should not be checked', () => {
    const wrapper = mountWithIntl(treeViewIsAllInitiallySelectedRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with isAllInitiallySelected turned on and empty children array', () => {
  const treeViewIsAllInitiallySelectedWithEmptyChildrenRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
        isAllInitiallySelected
      >
        {[]}
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a empty tree - checkbox should not be checked', () => {
    const wrapper = mountWithIntl(treeViewIsAllInitiallySelectedWithEmptyChildrenRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with isAllInitiallySelected turned off and empty children array', () => {
  const treeViewIsAllInitiallySelectedOffWithEmptyChildrenRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        {[]}
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a empty tree - checkbox should not be checked', () => {
    const wrapper = mountWithIntl(treeViewIsAllInitiallySelectedOffWithEmptyChildrenRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Empty TreeView with isAllInitiallySelected turned off and multiple empty children arrays', () => {
  const treeViewIsAllInitiallySelectedOffWithMultipleEmptyChildrenArraysRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        {[]}
        {[]}
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a empty tree - checkbox should not be checked', () => {
    const wrapper = mountWithIntl(treeViewIsAllInitiallySelectedOffWithMultipleEmptyChildrenArraysRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView with root item, folder has empty array', () => {
  const treeViewFoldersWithEmptyArrayAsChildrenRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" description="Description text" >
          {[]}
        </TreeView.Item>
        <TreeView.Folder id="f2" text="Folder 2" description="Description text" >
          {[]}
          {null}
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          {[]}
          {[]}
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a tree with a root level item, empty folder and populated folder', () => {
    const wrapper = mountWithIntl(treeViewFoldersWithEmptyArrayAsChildrenRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView with folders configured with isEmpty set to true', () => {
  const treeViewisEmptyFolderRender = (
    
      <TreeView
        title="test-title"
      >
        <TreeView.Folder id="f2" text="Folder 2" isEmpty />
        <TreeView.Folder id="f3" text="Folder 3" isEmpty >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a tree with a root level item, empty folder and populated folder', () => {
    const wrapper = mountWithIntl(treeViewisEmptyFolderRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView with root item, empty folder and populated folder', () => {
  const treeViewItemAndFoldersRender = (
    
      <TreeView
        title="test-title"
      >
        <TreeView.Item id="i1" text="Item 1" description="Description text" />
        <TreeView.Folder id="f2" text="Folder 2" description="Description text" />
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a tree with a root level item, empty folder and populated folder', () => {
    const wrapper = mountWithIntl(treeViewItemAndFoldersRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView with isAllInitiallySelected set to true', () => {
  const treeViewAllSelectedRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" />
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree with all items and folders selected', () => {
    const wrapper = mountWithIntl(treeViewAllSelectedRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeViewBase with isAllSelected set to true and selectedIds supplied', () => {
  const treeViewBaseWithSelectionsRender = (
  
    <TreeViewBase
      title="test-title"
      selectionEnabled
      isAllSelected
      selectedIds={['i1', 'f3_i1', 'f3_i2']}
    >
      <TreeViewBase.Item id="i1" text="Item 1" />
      <TreeViewBase.Folder id="f2" text="Folder 2" />
      <TreeViewBase.Folder id="f3" text="Folder 3" isInitiallyOpen >
        <TreeViewBase.Item id="f3_i1" text="Folder 3 / Item 1" />
        <TreeViewBase.Item id="f3_i2" text="Folder 3 / Item 2" />
      </TreeViewBase.Folder>
    </TreeViewBase>
   
  );

  // Snapshot Tests
  it('should render a populated TreeViewBase with the header checkbox checked and selected ids checked', () => {
    const wrapper = mountWithIntl(treeViewBaseWithSelectionsRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView with specific items/folders initially selected', () => {
  const treeViewSomeSelectedRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen isInitiallySelected>
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
        </TreeView.Folder>
        <TreeView.Folder id="f4" text="Folder 4" isInitiallyOpen >
          <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
          <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree with specific items/folders initially selected', () => {
    const wrapper = mountWithIntl(treeViewSomeSelectedRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView where specific items/folders have indicators and actions', () => {
  const overdueFolderIndicator = (
    <div>
      <IconOverDue />
    </div>
  );
  const dueSoonLeafIndicator = (
    <div>
      <IconDueSoon />
    </div>
  );
  const alertAction = (
    <div>
      <Button text="Alert" variant="utility" isCompact style={{ width: '25px' }} icon={<IconAlert />} />
    </div>
  );
  const warningAction = (
    <div>
      <Button text="Warning" variant="utility" isCompact style={{ width: '25px' }} icon={<IconWarning />} />
    </div>
  );
  const treeViewIndicatorsActionsRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" actions={warningAction} indicators={dueSoonLeafIndicator} />
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen isInitiallySelected>
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen actions={alertAction} indicators={overdueFolderIndicator} >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
        </TreeView.Folder>
        <TreeView.Folder id="f4" text="Folder 4" isInitiallyOpen >
          <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
          <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree where specific items/folders have indicators and actions', () => {
    const wrapper = mountWithIntl(treeViewIndicatorsActionsRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView where specific items/folders have custom props', () => {
  const treeViewCustomPropsRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" style={{ backgroundColor: 'lightPink' }} />
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen isInitiallySelected>
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen style={{ backgroundColor: 'lightPink' }} >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
        </TreeView.Folder>
        <TreeView.Folder id="f4" text="Folder 4" isInitiallyOpen >
          <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
          <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree where specific items/folders have custom props', () => {
    const wrapper = mountWithIntl(treeViewCustomPropsRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView with nested folders', () => {
  const treeViewNestedFoldersRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen isInitiallySelected>
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen style={{ backgroundColor: 'lightPink' }} >
            <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
            <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
          </TreeView.Folder>
          <TreeView.Folder id="f4" text="Folder 4" isInitiallyOpen >
            <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
            <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Item id="i1" text="Item 1" style={{ backgroundColor: 'lightPink' }} />
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree with nested folders', () => {
    const wrapper = mountWithIntl(treeViewNestedFoldersRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView where first folder has selected first child', () => {
  const treeViewFolderFirstVisibleRowStyleRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" isInitiallySelected />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen style={{ backgroundColor: 'lightPink' }} >
            <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
            <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
          </TreeView.Folder>
          <TreeView.Folder id="f4" text="Folder 4" >
            <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
            <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Item id="i1" text="Item 1" style={{ backgroundColor: 'lightPink' }} />
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree where first folder has selected first child', () => {
    const wrapper = mountWithIntl(treeViewFolderFirstVisibleRowStyleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView where first folder has selected first child - selection not enabled', () => {
  const treeViewFolderFirstVisibleRowNoSelectionStyleRender = (
    
      <TreeView
        title="test-title"
      >
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" isInitiallySelected />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen style={{ backgroundColor: 'lightPink' }} >
            <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
            <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
          </TreeView.Folder>
          <TreeView.Folder id="f4" text="Folder 4" >
            <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
            <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Item id="i1" text="Item 1" style={{ backgroundColor: 'lightPink' }} />
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree where first folder has selected first child - selection not enabled', () => {
    const wrapper = mountWithIntl(treeViewFolderFirstVisibleRowNoSelectionStyleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Populated TreeView where first root item is selected', () => {
  const treeViewFirstRootItemSelected = (
    
      <TreeView
        title="test-title"
        selectionEnabled
      >
        <TreeView.Item id="i1" text="Item 1" isInitiallySelected style={{ backgroundColor: 'lightPink' }} />
        <TreeView.Folder id="f2" text="Folder 2" isInitiallyOpen >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" isInitiallySelected />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen style={{ backgroundColor: 'lightPink' }} >
            <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
            <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" isInitiallySelected />
          </TreeView.Folder>
          <TreeView.Folder id="f4" text="Folder 4" >
            <TreeView.Item id="f4_i1" text="Folder 4 / Item 1" isInitiallySelected />
            <TreeView.Item id="f4_i2" text="Folder 4 / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a populated tree where first first root item is selected', () => {
    const wrapper = mountWithIntl(treeViewFirstRootItemSelected);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView w/single root expansion and two root level folders are configured to be initially open', () => {
  const treeViewSingleRootExpansionTwoRootsConfiguredOpen = (
    
      <TreeView
        title="test-title"
        singleRootFolderExpansion
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f2a" text="Folder 2a" isInitiallyOpen >
            <TreeView.Item id="f2a_i1" text="Folder 2a / Item 1" />
            <TreeView.Item id="f2a_i2" text="Folder 2a / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" isInitiallyOpen >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('Should render with only one root level folder open', () => {
    const wrapper = mountWithIntl(treeViewSingleRootExpansionTwoRootsConfiguredOpen);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView w/single root expansion and one root level folder is configured to be initially open', () => {
  const treeViewSingleRootExpansionOneRootConfiguredOpen = (
    
      <TreeView
        title="test-title"
        singleRootFolderExpansion
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f2a" text="Folder 2a" isInitiallyOpen >
            <TreeView.Item id="f2a_i1" text="Folder 2a / Item 1" />
            <TreeView.Item id="f2a_i2" text="Folder 2a / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('Should render with one root level folder open', () => {
    const wrapper = mountWithIntl(treeViewSingleRootExpansionOneRootConfiguredOpen);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView w/single root expansion and no root level folders configured to be initially open', () => {
  const treeViewSingleRootExpansionNoRootConfiguredOpen = (
    
      <TreeView
        title="test-title"
        singleRootFolderExpansion
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f2a" text="Folder 2a" >
            <TreeView.Item id="f2a_i1" text="Folder 2a / Item 1" />
            <TreeView.Item id="f2a_i2" text="Folder 2a / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('Should render with no root level folder open', () => {
    const wrapper = mountWithIntl(treeViewSingleRootExpansionNoRootConfiguredOpen);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView w/single root expansion and no children', () => {
  const treeViewSingleRootExpansionNoChildren = (
    
      <TreeView
        title="test-title"
        singleRootFolderExpansion
      />
   
  );

  // Snapshot Tests
  it('Should render TreeView with singleRootFolderExpansion prop but no children', () => {
    const wrapper = mountWithIntl(treeViewSingleRootExpansionNoChildren);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView w/all initially selected', () => {
  const treeViewItemFirstVisibleRowStyleRender = (
    
      <TreeView
        title="test-title"
        selectionEnabled
        isAllInitiallySelected
      >
        <TreeView.Item id="i1" text="Item 1" />
        <TreeView.Folder id="f2" text="Folder 2" >
          <TreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
          <TreeView.Item id="f2_i2" text="Folder 2 / Item 2" />
          <TreeView.Folder id="f2a" text="Folder 2a" >
            <TreeView.Item id="f2a_i1" text="Folder 2a / Item 1" />
            <TreeView.Item id="f2a_i2" text="Folder 2a / Item 2" />
          </TreeView.Folder>
        </TreeView.Folder>
        <TreeView.Folder id="f3" text="Folder 3" >
          <TreeView.Item id="f3_i1" text="Folder 3 / Item 1" />
          <TreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </TreeView.Folder>
      </TreeView>
   
  );

  // Snapshot Tests
  it('Should render with all folders/items selected', () => {
    const wrapper = mountWithIntl(treeViewItemFirstVisibleRowStyleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SingleSelectTreeView', () => {
  const singleSelectTreeView = (
    
      <SingleSelectTreeView
        title="Test TreeView - Single Selection"
      >
        <SingleSelectTreeView.Item id="i1" text="Item 1" />
        <SingleSelectTreeView.Item id="i2" text="Item 2" />
        <SingleSelectTreeView.Folder id="f1" text="Folder 1" >
          <SingleSelectTreeView.Item id="f1_i1" text="Folder 1 / Item 1" />
          <SingleSelectTreeView.Item id="f1_i2" text="Folder 1 / Item 2" />
          <SingleSelectTreeView.Folder id="f1a" text="Folder 1a">
            <SingleSelectTreeView.Item id="f1a_i1" text="Folder 1a / Item 1" />
            <SingleSelectTreeView.Item id="f1a_i2" text="Folder 1a / Item 2" />
          </SingleSelectTreeView.Folder>
          <SingleSelectTreeView.Folder id="f1b" text="Folder 1b">
            <SingleSelectTreeView.Item id="f1b_i1" text="Folder 1b / Item 1" isInitiallySelected />
            <SingleSelectTreeView.Item id="f1b_i2" text="Folder 1b / Item 2" />
            <SingleSelectTreeView.Folder id="f_1ba" text="Folder 1ba with extra text to cause truncation">
              <SingleSelectTreeView.Item id="f1ba_i1" text="Folder 1ba / Item 1" />
              <SingleSelectTreeView.Item id="f1ba_i2" text="Folder 1ba / Item 2 with extra text to cause truncation" />
            </SingleSelectTreeView.Folder>
          </SingleSelectTreeView.Folder>
        </SingleSelectTreeView.Folder>
        <SingleSelectTreeView.Folder id="f2" text="Folder 2" >
          <SingleSelectTreeView.Item id="f2_i1" text="Folder 2 / Item 1" />
        </SingleSelectTreeView.Folder>
        <SingleSelectTreeView.Folder id="f3" text="Folder 3">
          <SingleSelectTreeView.Item id="f3_i1" text="Folder 3 / Item 1" isInitiallySelected />
          <SingleSelectTreeView.Item id="f3_i2" text="Folder 3 / Item 2" />
        </SingleSelectTreeView.Folder>
      </SingleSelectTreeView>
   
  );

  // Snapshot Tests
  it('Should render SingleSelectTreeView with one selected item', () => {
    const wrapper = mountWithIntl(singleSelectTreeView);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('SingleSelectTreeView with no children', () => {
  const singleSelectTreeViewNoChildren = (
    
      <SingleSelectTreeView
        title="Test TreeView - Single Selection"
      />
   
  );

  // Snapshot Tests
  it('Should render SingleSelectTreeView with no children', () => {
    const wrapper = mountWithIntl(singleSelectTreeViewNoChildren);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TreeView with React Nodes for text props', () => {
  const rule = {
    draftIndicator: 1,
    name: 'Item 3',
  };
  const item1Text = (<span><strong><span style={{ color: 'red' }}>(Draft)</span> -</strong> Item 1</span>);
  const folder2Text = (<span>Folder 2 <i style={{ color: 'gray' }}><strong>(Empty)</strong></i></span>);
  const treeViewItemAndFoldersRender = (
    
      <TreeView
        title="test-title"
      >
        <TreeView.Item id="i1" text={item1Text} />
        <TreeView.Folder id="f2" text={folder2Text} />
        <TreeView.Item id="i3" text={<span>{rule.draftIndicator === 1 && <strong> (Draft) </strong>} {rule.name}</span>} />
      </TreeView>
   
  );

  // Snapshot Tests
  it('should render a tree with a root level item, empty folder and populated folder', () => {
    const wrapper = mountWithIntl(treeViewItemAndFoldersRender);
    expect(wrapper).toMatchSnapshot();
  });
});
