var App = window.App;
var ds = new App.DataStore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'eshpressho');
ds.getAll();
ds.remove('james@bond.com');
ds.getAll();
console.log(ds.getAll());
ds.get('m@bond.com');
console.log('Order: ' + ds.get('m@bond.com') + ' Email: m@bond.com');
ds.get('james@bond.com');
console.log('Order: ' + ds.get('james@bond.com') + ' Email: james@bond.com');
