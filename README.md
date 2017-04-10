# \<adom-list\>

It´s a component that shows a list. it have an structure of li, and it´s possible add other components inside of `li`.

For use this component, you can add containers inside of `adom-list` with a required id or a required class for every container that you want to add.

The JSON structure is:

```json
  [
    {
      id: 'list0',
    },
    {
      id: 'list1',
    },
    {
      id: 'list2',
    }
  ]
```

example:

```html
<adom-list>
  <div id="list0">
    insert here your content
  </div>
  <div id="list1">
    insert here your content
  </div>
  <div id="list2">
    insert here your content
  </div>
</adom-list>
```

By default, the direction of list is horizontal. It´s possible use this component vertically with `column` attribute.

example:

```html
<adom-list column>
  <span class="list0">Home</span>
  <span class="list1">Projects</span>
  <span class="list2">Contact</span>
</adom-list>
```

## Using the component

clone this repository in your local machine

    $ git clone https://Adominguezes@bitbucket.org/Adominguezes/adom-list.git

Begin with the component

    $ cd adom-card
    $ npm install
    $ bower install

## Serve the Application

You can serve the application with:

    $ gulp serve