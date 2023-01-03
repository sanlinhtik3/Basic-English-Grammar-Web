import { Fragment } from "react";
import Markdown from "../components/Markdown";

const markdown = `
# Verb to be

Verb to be ရှိသည်၊ ဖြစ်သည်
Verb to be ၏ အဓိပ္ပါယ်ကို ပုံမှန်အားဖြင့် ရှိသည်ဖြစ်သည်ဟု မှတ်ယူနိုင်ပါတယ်။

Example : ကျွန်တော်ကျောင်းသားတစ်ယောက် ဖြစ်တယ်။ \n
Example : ကျွန်တော့်မှာ စာအုပ်တစ်အုပ် ရှိတယ်။

### Verb to be ကြိယာများ

| Tense         | Singular | Plural  |
|---------------|----------|---------|
| Present Tense | am, is   | are     |
| Past Tense    | was      | were    |
| Future Tense  | will be  | will be |

### နာမ်စားများနှင့် Verb to be ကြိယာများတွဲစပ်ပုံ

| I    | am  |
|------|-----|
| He   | is  |
| She  | is  |
| It   | is  |
| We   | are |
| You  | are |
| They | are |

### Positive Sentence Example
- I am a student. (**ကျွန်တော် ကျောင်းသားတစ်ယောက် ဖြစ်ပါတယ်။**)
- I am a nurse. (**ကျွန်တော် သူနာပြုတစ်ယောက် ဖြစ်ပါတယ်။**)
- I am a farmer. (**ကျွန်တော် လယ်သမားတစ်ယောက် ဖြစ်ပါတယ်။**)

`;

const VToBe = () => {
  return (
    <Fragment>
      <Markdown DataMarkdown={markdown}/>
    </Fragment>
  );
};

export default VToBe;
