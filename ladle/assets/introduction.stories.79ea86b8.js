import{j as t,a as e,F as c}from"./index.88dd2d45.js";const d=()=>t("div",{style:{fontSize:20},children:[e("h1",{children:"What is Ladle"}),e("p",{children:"Ladle is a library used to create so-called stories. These stories are basically examples of components used in our code. You may have heard about Storybook, which serves the same purpose."}),e("h1",{children:"Why Ladle"}),e("p",{children:"Ladle is basically a faster version of Storybook."}),e("h1",{children:"What are the icons at the bottom?"}),e("p",{children:"From left to right:"}),t("ul",{children:[e("li",{children:"Lightbulb icon - Switching between light and dark theme"}),e("li",{children:"Diagonal arrows - Full screen mode (no icons and sidebar)"}),e("li",{children:"Mobile/web icon - Changing viewports"}),e("li",{children:"Text and left arrow - Toggling text between left to right"}),e("li",{children:"Code icon - Shows the code of current story. You can click on it to see how this story is written."}),e("li",{children:"Guy in circle - accessibility report"}),e("li",{children:"Ladle icon - Opens a menu about Ladle "})]}),e("h1",{children:"How can I use Ladle?"}),e("p",{children:"This introduction story is written with Ladle. As mentioned above, you can view the current story source code by clicking on the icon in bottom-left corner. There are also more examples in the navigation bar."})]}),u=()=>t("div",{style:{fontSize:20},children:[e("h1",{children:"What is the format of a story?"}),e("p",{children:"At the very least, you need to specify a file of a name. As per current configuration, this needs to be inside the `src` folder."}),e("p",{children:'The "Introduction" group in the sidebar is defined by the file name "introduction.stories.tsx".'}),e("p",{children:`The name of the stories below, for example "Default" and "Simple story", is defined by exported names of constant variables. If you'll open the code of this story, you'll see all the stories in the file "introduction.stories.tsx" with highlighted lines of the currently viewed story.`}),e("p",{children:'The simplest story can therefore even be "export const MyStory = () => return <div></div>"'}),e("p",{children:"When writing stories, we aim to describe some components that we'd like to showcase. This is especially useful when we have a component with multiple states - we can create multiple stories showing that component in multiple configurations."})]}),i=({count:o,disabled:n,label:r,colors:l,variant:s,size:a})=>t(c,{children:[t("div",{children:[e("h1",{children:"Controls"}),e("p",{children:'Another powerful tool we can use are so called "Options". These options allow us to define input properties for a specific function outside of code.'}),e("p",{children:"Notice that there is a new button in the bottom left corner with filters icon. Clicking it, you'll see that you can change what is being rendered on this page by tweaking the options. Try to play around with it."})]}),t("div",{children:[e("h2",{children:"The below values are changing based on what you've updated."}),t("p",{children:["Count: ",o]}),t("p",{children:["Disabled: ",n?"yes":"no"]}),t("p",{children:["Label: ",r]}),t("p",{children:["Colors: ",l.join(",")]}),t("p",{children:["Variant: ",s]}),t("p",{children:["Size: ",a]})]})]});i.args={label:"Hello world",disabled:!1,count:2,colors:["Red","Blue"]};i.argTypes={variant:{options:["primary","secondary"],control:{type:"radio"},defaultValue:"primary"},size:{options:["small","medium","big","huuuuge"],control:{type:"select"}}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as Default,u as DefaultStory,i as MoreOptions};
