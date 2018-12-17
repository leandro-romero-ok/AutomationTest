var timeout = 2000;
var demoCommands = {
};
module.exports = {
    url: 'http://immense-hollows-74271.herokuapp.com/',
    elements: {
        navBarBrand: { 
          selector: 'a[href*="Angular Strangerlist"]' 
        },
        editButton: { 
          selector: 'button.btn.btn-default' 
        },
        textAreaEdit: { 
          selector: 'textarea[name="text"]' 
        },
        updateButton: { 
          selector: '.btn-primary' 
        },
        textDescription: { 
          selector: 'p.story.ng-binding' 
        },
        githubLink: { 
          selector: 'a[href="https://github.com/mrios/angular-strangerlist"]'
        },
        deleteItem: { 
          selector: '.media:nth-child(2) .btn:nth-child(2)'
        },
        deleteWarningText: { 
          selector: 'div.modal-body.ng-scope > p'
        }
      }
};