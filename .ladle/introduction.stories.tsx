import * as React from 'react';
import type { Story } from '@ladle/react';

export const Default = () => {
  return (
    <div style={{ fontSize: 20 }}>
      <h1>What is Ladle</h1>
      <p>
        Ladle is a library used to create so-called stories. These stories are basically examples of
        components used in our code. You may have heard about Storybook, which serves the same
        purpose.
      </p>
      <h1>Why Ladle</h1>
      <p>Ladle is basically a faster version of Storybook.</p>
      <h1>What are the icons at the bottom?</h1>
      <p>From left to right:</p>
      <ul>
        <li>Lightbulb icon - Switching between light and dark theme</li>
        <li>Diagonal arrows - Full screen mode (no icons and sidebar)</li>
        <li>Mobile/web icon - Changing viewports</li>
        <li>Text and left arrow - Toggling text between left to right</li>
        <li>
          Code icon - Shows the code of current story. You can click on it to see how this story is
          written.
        </li>
        <li>Guy in circle - accessibility report</li>
        <li>Ladle icon - Opens a menu about Ladle </li>
      </ul>
      <h1>How can I use Ladle?</h1>
      <p>
        This introduction story is written with Ladle. As mentioned above, you can view the current
        story source code by clicking on the icon in bottom-left corner. There are also more
        examples in the navigation bar.
      </p>
    </div>
  );
};

export const DefaultStory = () => {
  return (
    <div style={{ fontSize: 20 }}>
      <h1>What is the format of a story?</h1>
      <p>
        At the very least, you need to specify a file of a name. As per current configuration, this
        needs to be inside the `src` folder.
      </p>
      <p>
        The "Introduction" group in the sidebar is defined by the file name
        "introduction.stories.tsx".
      </p>
      <p>
        The name of the stories below, for example "Default" and "Simple story", is defined by
        exported names of constant variables. If you'll open the code of this story, you'll see all
        the stories in the file "introduction.stories.tsx" with highlighted lines of the currently
        viewed story.
      </p>
      <p>
        The simplest story can therefore even be "export const MyStory = &#40;&#41; &#61;&gt; return
        &lt;div&gt;&lt;/div&gt;"
      </p>
      <p>
        When writing stories, we aim to describe some components that we'd like to showcase. This is
        especially useful when we have a component with multiple states - we can create multiple
        stories showing that component in multiple configurations.
      </p>
    </div>
  );
};

export const MoreOptions: Story<{
  label: string;
  disabled: boolean;
  count: number;
  colors: string[];
  variant: string;
  size: string;
}> = ({ count, disabled, label, colors, variant, size }) => {
  return (
    <>
      <div>
        <h1>Controls</h1>
        <p>
          Another powerful tool we can use are so called "Options". These options allow us to define
          input properties for a specific function outside of code.
        </p>
        <p>
          Notice that there is a new button in the bottom left corner with filters icon. Clicking
          it, you'll see that you can change what is being rendered on this page by tweaking the
          options. Try to play around with it.
        </p>
      </div>
      <div>
        <h2>The below values are changing based on what you've updated.</h2>
        <p>Count: {count}</p>
        <p>Disabled: {disabled ? 'yes' : 'no'}</p>
        <p>Label: {label}</p>
        <p>Colors: {colors.join(',')}</p>
        <p>Variant: {variant}</p>
        <p>Size: {size}</p>
      </div>
    </>
  );
};

MoreOptions.args = {
  label: 'Hello world',
  disabled: false,
  count: 2,
  colors: ['Red', 'Blue'],
};
MoreOptions.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' },
    defaultValue: 'primary',
  },
  size: {
    options: ['small', 'medium', 'big', 'huuuuge'],
    control: { type: 'select' },
  },
};
