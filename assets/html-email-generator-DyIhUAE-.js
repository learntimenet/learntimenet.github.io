import{C as e,S as t,b as n,t as r,w as i}from"./LoaderHider-CwMD9_gc.js";import{t as a}from"./CopyButton-D9MgW4b0.js";import{t as o}from"./usePersistentState-spS8lA47.js";import{t as s}from"./SegmentedControl-DHQ3y647.js";import{t as c}from"./ToolPageLayout-CACS-0TA.js";import{t as l}from"./ColorInput-KwjOrjZ4.js";import{t as u}from"./contrastRatio-Cvoc9Ufi.js";import{t as d}from"./escapeHtml-B5Fn7zsl.js";import{t as f}from"./isSafeUrl-D5KBTfTf.js";var p=i(),m=e(),h={logoUrl:``,brandColor:`#4f46e5`,backgroundColor:`#f3f4f6`,textColor:`#1f2937`,font:`sans`,align:`left`},g=[{label:`Welcome`,settings:{...h,preheader:`Your account is ready. Here is how to get started.`,heading:`Welcome aboard, Alex!`,body:`Thanks for signing up. Your account is ready, and your first project is waiting for you.

Start by creating a project and inviting your team. It takes about two minutes.`,buttonLabel:`Create my first project`,buttonUrl:`https://example.com/projects/new`,footer:`You received this email because you signed up at example.com.
Example Inc., 1 Main Street, Springfield`}},{label:`Password reset`,settings:{...h,brandColor:`#0f766e`,align:`center`,preheader:`Use this link within 30 minutes to choose a new password.`,heading:`Reset your password`,body:`We received a request to reset the password of your account.

The link below works for 30 minutes. If you didn't ask for it, ignore this email: your password stays the same.`,buttonLabel:`Choose a new password`,buttonUrl:`https://example.com/reset?token=abc123`,footer:`Example Inc., 1 Main Street, Springfield`}},{label:`Event invitation`,settings:{...h,brandColor:`#c2410c`,backgroundColor:`#fff7ed`,font:`serif`,align:`center`,preheader:`Thursday, June 12, 6 pm. Drinks and talks, on us.`,heading:`You're invited to our summer meetup`,body:`Join us on Thursday, June 12, from 6 pm, for three short talks and drinks on the rooftop.

Seats are limited, so save yours today.`,buttonLabel:`Save my seat`,buttonUrl:`https://example.com/meetup`,footer:`Example Inc., 1 Main Street, Springfield
Don't want these emails? Reply with "unsubscribe".`}}],_=e=>({r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16),alpha:1});function v(e){let t=_(e);return u(t,_(`#ffffff`))>=u(t,_(`#111111`))?`#ffffff`:`#111111`}function y(e){return e.replaceAll(`\r
`,`
`).split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>e.split(`
`).map(e=>d(e.trim())).join(`<br>`))}var b={sans:`Helvetica, Arial, sans-serif`,serif:`Georgia, 'Times New Roman', serif`};function x(e){let t=b[e.font],n=e.align,r=`font-family:${t};color:${e.textColor};text-align:${n};`,i=[];e.logoUrl&&f(e.logoUrl)&&i.push(`          <tr>
            <td align="${n}" style="padding:32px 32px 0;">
              <img src="${d(e.logoUrl.trim())}" alt="" width="120" style="display:block;border:0;height:auto;max-width:120px;">
            </td>
          </tr>`),e.heading.trim()&&i.push(`          <tr>
            <td style="padding:32px 32px 8px;${r}font-size:24px;line-height:32px;font-weight:bold;">${d(e.heading.trim())}</td>
          </tr>`);for(let t of y(e.body))i.push(`          <tr>
            <td style="padding:8px 32px;${r}font-size:16px;line-height:24px;">${t}</td>
          </tr>`);if(e.buttonLabel.trim()&&f(e.buttonUrl)){let r=d(e.buttonUrl.trim()),a=d(e.buttonLabel.trim()),o=v(e.brandColor);i.push(`          <tr>
            <td align="${n}" style="padding:24px 32px 8px;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${r}" style="height:44px;v-text-anchor:middle;width:240px;" arcsize="14%" stroke="f" fillcolor="${e.brandColor}">
                <w:anchorlock/>
                <center style="color:${o};font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">${a}</center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-->
              <a href="${r}" style="display:inline-block;background-color:${e.brandColor};color:${o};font-family:${t};font-size:16px;font-weight:bold;line-height:44px;text-decoration:none;padding:0 24px;border-radius:6px;">${a}</a>
              <!--<![endif]-->
            </td>
          </tr>`)}let a=y(e.footer).map(e=>`          <tr>
            <td style="padding:4px 32px;font-family:${t};font-size:12px;line-height:18px;color:#6b7280;text-align:center;">${e}</td>
          </tr>`).join(`
`);return`<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${d(e.heading.trim())}</title>
  <!--[if mso]>
  <style>table, td, a { font-family: Arial, sans-serif !important; }</style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${e.backgroundColor};">
  <div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;mso-hide:all;">${d(e.preheader.trim())}${`&#8199;&#65279;&#847; `.repeat(e.preheader.trim()?30:0)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${e.backgroundColor};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:8px;">
${i.join(`
`)}
          <tr>
            <td style="padding:0 0 24px;"></td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
          <tr>
            <td style="padding:12px 0 0;"></td>
          </tr>
${a}
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>
`}var S=[`preheader`,`logoUrl`,`heading`,`body`,`buttonLabel`,`buttonUrl`,`footer`],C=[`brandColor`,`backgroundColor`,`textColor`];function w(e){let t=e;return typeof t==`object`&&!!t&&S.every(e=>typeof t[e]==`string`)&&C.every(e=>typeof t[e]==`string`&&/^#[0-9a-f]{6}$/i.test(t[e]))&&(t.font===`sans`||t.font===`serif`)&&(t.align===`left`||t.align===`center`)}var T=t(),E=[{key:`preheader`,label:`Preview text`,hint:`Shown after the subject in the inbox, hidden in the email.`},{key:`logoUrl`,label:`Logo address (optional)`,url:!0},{key:`heading`,label:`Heading`},{key:`body`,label:`Text`,hint:`A blank line starts a new paragraph.`,rows:6},{key:`buttonLabel`,label:`Button text (empty for no button)`},{key:`buttonUrl`,label:`Button link`,url:!0},{key:`footer`,label:`Footer`,rows:3}],D=[{value:`sans`,label:`Sans-serif`},{value:`serif`,label:`Serif`}],O=[{value:`left`,label:`Left`},{value:`center`,label:`Center`}],k=[{value:`desktop`,label:`Desktop`},{value:`phone`,label:`Phone`}],A=`block w-full rounded-2xl border bg-paper px-4 py-2.5 text-sm text-ink transition-colors outline-none focus:border-brand/40`;function j({buttonClassName:e}){let t=(0,p.useId)(),[r,i]=o(`html-email-generator:email`,g[0].settings,w),[c,u]=o(`html-email-generator:preview`,`desktop`,e=>e===`desktop`||e===`phone`),d=x(r),m=new Blob([d]).size,h=e=>i(t=>({...t,...e})),_=e=>{let t=r[e.key].trim();return!e.url||t===``||f(t)?null:`Use a whole address starting with https://, like https://example.com/page.`};return(0,T.jsxs)(`section`,{className:`rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-brand/10 max-sm:p-4`,"aria-labelledby":`${t}-title`,children:[(0,T.jsx)(`h2`,{id:`${t}-title`,className:`m-0 mb-4 text-lg font-bold tracking-tight`,children:`Write the email`}),(0,T.jsxs)(`div`,{className:`grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-start gap-8 max-lg:grid-cols-1`,children:[(0,T.jsxs)(`div`,{className:`grid gap-4`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{className:`m-0 mb-2 text-sm font-semibold text-ink-soft`,children:`Start from`}),(0,T.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[g.map(({label:t,settings:n})=>(0,T.jsx)(`button`,{type:`button`,className:e,onClick:()=>i(n),children:t},t)),(0,T.jsx)(`button`,{type:`button`,className:e,onClick:()=>h(Object.fromEntries(E.map(({key:e})=>[e,``]))),children:`Clear text`})]})]}),E.map(e=>{let i=_(e),a=`${t}-${e.key}`,o=[e.hint&&`${a}-hint`,i&&`${a}-error`].filter(Boolean).join(` `)||void 0,s={id:a,className:n(A,i?`border-accent-coral/60`:`border-border`,e.url&&`font-mono`),value:r[e.key],spellCheck:!e.url,"aria-invalid":i?!0:void 0,"aria-describedby":o};return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`label`,{htmlFor:a,className:`mb-1.5 block text-sm font-semibold text-ink-soft`,children:e.label}),e.rows?(0,T.jsx)(`textarea`,{...s,rows:e.rows,onChange:t=>h({[e.key]:t.target.value})}):(0,T.jsx)(`input`,{...s,type:e.url?`url`:`text`,autoComplete:`off`,placeholder:e.url?`https://`:void 0,onChange:t=>h({[e.key]:t.target.value})}),e.hint&&(0,T.jsx)(`p`,{id:`${a}-hint`,className:`m-0 mt-1 text-xs text-text-muted`,children:e.hint}),i&&(0,T.jsxs)(`p`,{id:`${a}-error`,className:`m-0 mt-1 text-xs font-semibold text-accent-coral`,children:[i,` It is left out until then.`]})]},e.key)}),(0,T.jsxs)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-3`,children:[(0,T.jsx)(l,{label:`Button color`,value:r.brandColor,onChange:e=>h({brandColor:e})}),(0,T.jsx)(l,{label:`Background`,value:r.backgroundColor,onChange:e=>h({backgroundColor:e})}),(0,T.jsx)(l,{label:`Text color`,value:r.textColor,onChange:e=>h({textColor:e})})]}),(0,T.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,T.jsx)(s,{label:`Font`,options:D,value:r.font,onChange:e=>h({font:e})}),(0,T.jsx)(s,{label:`Alignment`,options:O,value:r.align,onChange:e=>h({align:e})})]})]}),(0,T.jsxs)(`div`,{className:`grid gap-4 max-lg:order-first lg:sticky lg:top-36`,children:[(0,T.jsx)(s,{label:`Preview`,options:k,value:c,onChange:u}),(0,T.jsx)(`div`,{className:`overflow-hidden rounded-2xl border border-border bg-paper`,children:(0,T.jsx)(`iframe`,{title:`Email preview`,srcDoc:d,sandbox:``,className:n(`mx-auto block h-[36rem] w-full border-0 bg-white max-sm:h-[28rem]`,c===`phone`&&`max-w-[375px] border-x border-border`)})}),(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center justify-between gap-2`,children:[(0,T.jsx)(`label`,{htmlFor:`${t}-html`,className:`text-sm font-semibold text-ink-soft`,children:`HTML`}),(0,T.jsxs)(`span`,{className:`text-xs text-text-muted`,children:[(m/1024).toFixed(1),` KB`]})]}),(0,T.jsx)(`textarea`,{id:`${t}-html`,readOnly:!0,value:d,rows:10,spellCheck:!1,className:`block w-full resize-y rounded-2xl border border-border bg-paper px-4 py-3 font-mono text-xs leading-relaxed text-ink outline-none focus:border-brand/40`}),(0,T.jsxs)(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[(0,T.jsx)(a,{value:d,label:`Copy the HTML`}),(0,T.jsx)(`button`,{type:`button`,className:e,onClick:()=>{let e=URL.createObjectURL(new Blob([d],{type:`text/html`})),t=document.createElement(`a`);t.href=e,t.download=`email.html`,t.click(),URL.revokeObjectURL(e)},children:`Download email.html`})]})]})]})]})]})}var M=`inline-flex min-h-10 cursor-pointer items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-ink-soft transition-colors hover:border-brand/30 hover:bg-brand-soft hover:text-brand aria-pressed:border-brand/40 aria-pressed:bg-brand-soft aria-pressed:text-brand disabled:cursor-not-allowed disabled:opacity-50`,N=[{title:`Why tables and inline styles`,description:`Gmail removes most <style> rules, and Outlook draws email with Word, which ignores flexbox and grid. Tables with inline styles are the layout every client agrees on.`},{title:`A button Outlook draws`,description:`Outlook on Windows ignores padding and border-radius on links. The generated HTML adds a VML button inside an Outlook-only comment, so it shows up there too.`},{title:`Stay under 102 KB`,description:`Gmail cuts emails bigger than about 102 KB and hides the rest behind a link. Keep images on a server and link them, never paste them in as data.`}];function P(){return(0,T.jsxs)(c,{tool:`html-email-generator`,name:`HTML email generator`,title:`HTML emails`,highlight:`that every inbox shows right.`,description:`Write a heading, text and a button, pick your colors, and get HTML that works in Gmail, Outlook and Apple Mail, with a live preview.`,children:[(0,T.jsx)(j,{buttonClassName:M}),(0,T.jsxs)(`section`,{className:`mt-16`,"aria-labelledby":`email-tips-title`,children:[(0,T.jsx)(`h2`,{id:`email-tips-title`,className:`m-0 mb-6 text-2xl font-bold tracking-tight`,children:`Good to know`}),(0,T.jsx)(`ul`,{className:`m-0 grid list-none grid-cols-3 gap-6 p-0 max-md:grid-cols-1 max-md:gap-4`,children:N.map(({title:e,description:t})=>(0,T.jsxs)(`li`,{children:[(0,T.jsx)(`h3`,{className:`m-0 mb-2 text-base font-bold tracking-tight text-ink-soft`,children:e}),(0,T.jsx)(`p`,{className:`m-0 text-sm leading-relaxed text-text-muted`,children:t})]},e))})]})]})}(0,m.createRoot)(document.getElementById(`root`)).render((0,T.jsx)(p.StrictMode,{children:(0,T.jsx)(r,{children:(0,T.jsx)(P,{})})}));