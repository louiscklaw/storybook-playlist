const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

let list_test_component = [
  'OutlinedRed',
  'OutlinedBlue',
  'OutlineAssignTableDialog',
  'OutlineSmallWaitingServiceCard',
  'OutlineSmallWaitingTableCard',
  'ChangeRestaurantOpen',
  'ChangeRestaurantClosed',
  'AddCategory',
  'TestSelect',
  'AddFood',
  'DeleteCategory',
  'DeleteFood',
  'BillCard',
  'FoodOrderTable',
  'ServiceRequestTable',
  'LandingPageSetting',
  'OpeningHourSetting',
  'AdvertisementTable',
  'EditAdvertisement',
  'DeleteAdvertisement',
  'AddRestaurantOperator',
  'RestaurantOperatorTable',
  'AddRestaurant',
  'RestaurantTable',
  'AdminDeleteRestaurant',
  'AlertNewServiceRequest',
];

let dest_component_basepath = 'src/stories/Lynked';
let source_component = 'src/stories/Lynked/AlertNewSservieRequest';

for (let i = 0; i < list_test_component.length; i++) {
  let dest_component_path = `${dest_component_basepath}/${list_test_component[i]}`;
  let index_stories_js = `${dest_component_path}/index.stories.js`;

  let mk_command = `mkdir -p ${dest_component_path}`;
  child_process.execSync(mk_command, { shell: true });

  let cp_command = `cp -R ${source_component}/* ${dest_component_path}`;
  child_process.execSync(cp_command, { shell: true });

  fs.writeFileSync(
    index_stories_js,
    fs
      .readFileSync(index_stories_js, { encoding: 'utf-8' })
      .replace(
        `Lynked/${'AlertNewSservieRequest'}`,
        `Lynked/${list_test_component[i]}`
      ),
    { encoding: 'utf-8' }
  );
}
