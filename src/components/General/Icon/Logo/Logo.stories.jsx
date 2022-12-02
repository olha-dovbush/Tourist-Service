import { BrowserRouter } from 'react-router-dom';
import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = (args) => (
  <BrowserRouter>
    <div style={{ width: 'max-content', marginTop: '50px' }}>
      <Logo {...args} />
    </div>
  </BrowserRouter>
);

export const HeaderLogo = Template.bind({});
HeaderLogo.args = {};
