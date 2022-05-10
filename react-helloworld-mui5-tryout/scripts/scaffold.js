const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

let list_test_component = [
  'MarkDownRenderer',
  'MiniVariantDrawer',
  'Drawers',
  'MKTypography',
  'MKInput',
  'BackgroundCards',
  'BlogCards',
  'BookingCards',
  'Breadcrumbs',
  'InfoCards',
  'MKDatePicker',
  'PricingCards',
  'MKAvatar',
  'MKBadge',
  'ReviewCards',
  'CounterCards',
  'MKAlert',
  'MKBox',
  'MKButton',
  'MKPagination',
  'MKProgress',
  'MKSnackbar',
  'MKSocialButton',
  'RotatingCard',
  'Stepper',
  'Table',
  'TeamCards',
];

let dest_component_basepath = 'src/stories/Lynked';
let source_component = 'src/stories/Lynked/OutlineFood';

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
      .replace('Lynked/OutlineFood', `Lynked/${list_test_component[i]}`),
    { encoding: 'utf-8' }
  );
}
