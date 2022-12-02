import { BrowserRouter } from 'react-router-dom';
import { NavigationLink } from './NavigationLink';

export default { title: 'Example/NavigationLink', component: NavigationLink };

const Template = (args) => (
  <BrowserRouter>
    <NavigationLink {...args} />
  </BrowserRouter>
);

export const MainLink = Template.bind({});
MainLink.args = {
  children: 'Destination',
};
