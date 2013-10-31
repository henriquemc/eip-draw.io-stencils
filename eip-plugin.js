/**
* Draw.io stencil
*/
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    ui.sidebar.addPalette('BPMNLibrary', 'BPMN', true, function(content) {

        // content.appendChild(ui.sidebar.createVertexTemplate(null, 120, 60));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://googledrive.com/host/0B8WNmkSxRc5EOENlMVY4UWRHc3c/BPMN-Mail-Double-Simpler.svg', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-2-1-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-2-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-1-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-2-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-4-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-thick-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-double-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-single-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('ellipse', 80, 80));
        content.appendChild(ui.sidebar.createVertexTemplate('shape=hexagon', 120, 80));

        content.appendChild(ui.sidebar.createEdgeTemplate('edgeStyle=none;endArrow=none;', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('shape=link', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('arrow', 100, 100));
    });

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // Adds logo to footer
    ui.footerContainer.innerHTML = '<img align="right" style="margin-top:14px;margin-right:6px;" ' + 'src="https://www.draw.io/images/logo-small.gif"/>';

    // Adds resource for action
    mxResources.parse('helloWorldAction=Hello, World!');

    // Adds action
    ui.actions.addAction('helloWorldAction', function() {
        var ran = Math.floor((Math.random()*100)+1);
        mxUtils.alert('A random number is ' + ran);
    });

    // Adds menu
    ui.menubar.addMenu('Hello, World Menu', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'helloWorldAction');
    });

    // Reorders menubar
    ui.menubar.container.insertBefore(ui.menubar.container.lastChild,
    ui.menubar.container.lastChild.previousSibling.previousSibling);

    // Adds toolbar button
    ui.toolbar.addSeparator();
    var elt = ui.toolbar.addItem('', 'helloWorldAction');

    // Cannot use built-in sprites
    elt.firstChild.style.backgroundImage = 'url(https://www.draw.io/images/logo-small.gif)';
    elt.firstChild.style.backgroundPosition = '2px 3px';

    // Displays status message
    ui.editor.setStatus('Hello, World!');
});
