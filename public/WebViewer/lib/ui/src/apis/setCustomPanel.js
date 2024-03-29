/**
 * Adds a custom panel in left panel
 * @method WebViewer#setCustomPanel
 * @param {object} options
 * @param {object} options.tab Tab options.
 * @param {string} options.tab.dataElement data-element for tab.
 * @param {string} options.tab.title Tooltip for tab.
 * @param {string} options.tab.img Url for an image.
 * @param {object} options.panel Panel options.
 * @param {string} options.panel.dataElement data-element for panel.
 * @param {WebViewer~renderCustomPanel} options.panel.render Function that returns panel element.
 * @example // 5.1 and after
WebViewer(...)
  .then(function(instance) {
    var myCustomPanel = {
      tab:{
        dataElement: 'customPanelTab',
        title: 'customPanelTab',
        img: 'https://www.pdftron.com/favicon-32x32.png',
      },
      panel: {
        dataElement: 'customPanel',
        render: function() {
          var div = document.createElement('div');
          div.innerHTML = 'Hello World';
          return div;
        }
      }
    };

    instance.setCustomPanel(myCustomPanel);
  });
 * @example // 4.0 ~ 5.0
var viewerElement = document.getElementById('viewer');
var viewer = new PDFTron.WebViewer(...);

viewerElement.addEventListener('ready', function() {
  var instance = viewer.getInstance();
  var myCustomPanel = {
    tab:{
      dataElement: 'customPanelTab',
      title: 'customPanelTab',
      img: 'https://www.pdftron.com/favicon-32x32.png',
    },
    panel: {
      dataElement: 'customPanel',
      render: function() {
        const div = document.createElement('div');
        div.innerHTML = 'Hello World';
        return div;
      }
    }
  };

  instance.setCustomPanel();
});
 */
/**
 * Callback that gets passed to `options.panel.render` in {@link CoreControls.ReaderControl#setCustomPanel setCustomPanel}.
 * @callback WebViewer~renderCustomPanel
 * @returns {HTMLElement} Panel element.
 */

import actions from 'actions';

export default store => customPanel => {
  store.dispatch(actions.setCustomPanel(customPanel));
};