import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = (args) => (
  <div style={{ width: 'max-content', marginTop: '50px' }}>
    <Logo {...args} />
  </div>
);

export const HeaderLogo = Template.bind({});
HeaderLogo.args = {};
