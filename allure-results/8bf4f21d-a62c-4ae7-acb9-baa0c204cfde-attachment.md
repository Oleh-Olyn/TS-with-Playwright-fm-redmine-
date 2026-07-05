# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: specs\test1.spec.ts >> Checking registration functionality with valid data >> test1
- Location: tests\specs\test1.spec.ts:16:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type=\'submit\'][name=\'commit\']')
    - locator resolved to <input type="submit" name="commit" value="Відправити" data-disable-with="Відправити"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - list:
          - listitem [ref=e7]:
            - link "Увійти" [ref=e8] [cursor=pointer]:
              - /url: /login
          - listitem [ref=e9]:
            - link "Зареєструватися" [ref=e10] [cursor=pointer]:
              - /url: /account/register
      - list:
        - listitem [ref=e11]:
          - link "Домашня сторінка" [ref=e12] [cursor=pointer]:
            - /url: /
        - listitem [ref=e13]:
          - link "Проекти" [ref=e14] [cursor=pointer]:
            - /url: /projects
        - listitem [ref=e15]:
          - link "Допомога" [ref=e16] [cursor=pointer]:
            - /url: https://www.redmine.org/guide
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]:
            - link "Пошук" [ref=e21] [cursor=pointer]:
              - /url: /search
            - text: ":"
          - textbox "Пошук:" [ref=e22]
        - generic [ref=e24] [cursor=pointer]: Перейти до проекту...
      - heading "Redmine" [level=1] [ref=e25]
    - generic [ref=e26]:
      - insertion [ref=e28]:
        - iframe [ref=e30]:
          - generic [active] [ref=f11e1]:
            - link "Advertisement" [ref=f11e6] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Ccr4hlUFKatyjLc7UjuwP4qfv-QeN-q6KiAHZ_PSE8hX4qLaViwMQASDBl_QHYKXmo4aII6ABvteMmAPIAQmpAr-MRGWyHFg-qAMByANIqgTiAU_QWz7MFhbQ5KiQt6zZaeOK-aoSwMGIppGJml5IIyr7EM3fTVv1iziyLaoZWtLNGDMPVT_0f7bKz3euLJmIjj96NBbMx8OHGiMqv6qeTXU-fq7IHqdPZBIVB5EwZayr2lplZpbJLLL4PpF4erAxPTGMYqWDEXgq01vUUfLWHw7JTUcDOiE8hpr3oQBW6GdSYjM9bGhUJjm2iQ4NvlL7gx8GFAGc0NafoknQUOZWJHa7r50mtojRARTSTrwHtxbvxyWhqh55xwfnwWbJTWd1v4Bx8F12beYzEnzSfDHwh6JgsfjABK6vs9DRBYgFxuGH6FigBi6AB6qo82eoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WICo_Pm4u5UDYAGxCfIwxKW-w2POgAoBmAsByAsBgAwBogwPKgoKCI7fsQKV4rECkAEBqg0CVUHIDQHqDRMI28b8-bi7lQMVTqqDBx3i0zt_8A0CiA4F2BMD0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSArxQGC4iAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMInML8-bi7lQMVTqqDBx3i0zt_EAEYASAAEgJjEvD_BwE&num=1&cid=CAQS8wEAEQoqgQ25Fwo91Na4nwNq7bU5ft54SCGIW9mB3dhJol6Mz_vocTqEYESC9mMWso0yc-fZ7izF8MFJEYtr1pOV9H9by7PTWrLgbqKlyKQySWkvTNCj03CPLbg_T4t_basCuQ5pgh1mAtAJyM3rW0gEdL-6oo21FmnT46WbZu76lgt9lJNGiYt7iHKtKVUDj5i7lJg2W1ilh_pYqmA3sn7OjRe0jHgXEvzHraIggVNEdncPrOojI06m2n0HaOJQVuDHTeLWu6n3YELPucSLAwZUZ1tLTCYzi8_Tkb3Nvah1_DmopcOhIjl0gTo1IJMa_R25GIsYAQ&sig=AOD64_15SDw7kpTmsR80vNwxAVy0IfEb9w&client=ca-pub-0447284344517370&rf=1&nb=25&adurl=https://www.instagram.com/p/DYMIrWWDcTv/%3Fimg_index%3D1%26gad_source%3D5%26gad_campaignid%3D23840551110%26gclid%3DEAIaIQobChMInML8-bi7lQMVTqqDBx3i0zt_EAEYASAAEgJjEvD_BwE
              - iframe [ref=f11e9]:
                - link [ref=f15e2] [cursor=pointer]:
                  - /url: javascript:window.open(window.clickTag)
            - img [ref=f11e13] [cursor=pointer]
            - button [ref=f11e15] [cursor=pointer]:
              - img [ref=f11e16]
            - iframe
      - generic [ref=e31]:
        - heading "Зареєструватися" [level=2] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]:
              - generic [ref=e36]: Вхід *
              - textbox "Вхід *" [ref=e37]: Scarlett_Leffler
            - paragraph [ref=e38]:
              - generic [ref=e39]: Пароль *
              - textbox "Пароль *" [ref=e40]: iFf4LUTO7ysNYHI
              - emphasis [ref=e41]: Повинно мати якнайменше 8 символів(и) у довжину.
            - paragraph [ref=e42]:
              - generic [ref=e43]: Підтвердження *
              - textbox "Підтвердження *" [ref=e44]: iFf4LUTO7ysNYHI
            - paragraph [ref=e45]:
              - generic [ref=e46]: Ім'я *
              - textbox "Ім'я *" [ref=e47]: Tito
            - paragraph [ref=e48]:
              - generic [ref=e49]: Прізвище *
              - textbox "Прізвище *" [ref=e50]: Nitzsche
            - paragraph [ref=e51]:
              - generic [ref=e52]: Ел. пошта *
              - textbox "Ел. пошта *" [active] [ref=e53]: Titus_Halvorson@yahoo.com
            - paragraph [ref=e54]:
              - generic [ref=e55]: Приховувати мій email
              - checkbox "Приховувати мій email" [checked] [ref=e56]
            - paragraph [ref=e57]:
              - generic [ref=e58]: Мова
              - combobox "Мова" [ref=e59]:
                - option "(auto)"
                - option "Albanian (Shqip)"
                - option "Arabic (عربي)"
                - option "Azerbaijani (Azeri)"
                - option "Basque (Euskara)"
                - option "Bosnian (Bosanski)"
                - option "Bulgarian (Български)"
                - option "Catalan (Català)"
                - option "Chinese/Simplified (简体中文)"
                - option "Chinese/Traditional (繁體中文)"
                - option "Croatian (Hrvatski)"
                - option "Czech (Čeština)"
                - option "Danish (Dansk)"
                - option "Dutch (Nederlands)"
                - option "English"
                - option "English (British)"
                - option "Estonian (Eesti)"
                - option "Finnish (Suomi)"
                - option "French (Français)"
                - option "Galician (Galego)"
                - option "German (Deutsch)"
                - option "Greek (Ελληνικά)"
                - option "Hebrew (עברית)"
                - option "Hungarian (Magyar)"
                - option "Indonesian (Bahasa Indonesia)"
                - option "Italian (Italiano)"
                - option "Japanese (日本語)"
                - option "Korean (한국어)"
                - option "Latvian (Latviešu)"
                - option "Lithuanian (lietuvių)"
                - option "Macedonian (Македонски)"
                - option "Mongolian (Монгол)"
                - option "Norwegian (Norsk bokmål)"
                - option "Persian (فارسی)"
                - option "Polish (Polski)"
                - option "Portuguese (Português)"
                - option "Portuguese/Brazil (Português/Brasil)"
                - option "Romanian (Română)"
                - option "Russian (Русский)"
                - option "Serbian (Srpski)"
                - option "Serbian Cyrillic (Српски)"
                - option "Slovak (Slovenčina)"
                - option "Slovene (Slovenščina)"
                - option "Spanish (Español)"
                - option "Spanish/Panama (Español/Panamá)"
                - option "Swedish (Svenska)"
                - option "Thai (ไทย)"
                - option "Turkish (Türkçe)"
                - option "Ukrainian (Українська)" [selected]
                - option "Vietnamese (Tiếng Việt)"
            - paragraph [ref=e60]:
              - generic [ref=e61]: Organization
              - textbox "Organization" [ref=e62]
            - paragraph [ref=e63]:
              - generic [ref=e64]: Location
              - textbox "Location" [ref=e65]
            - paragraph [ref=e66]:
              - generic [ref=e67]: IRC nick
              - textbox "IRC nick" [ref=e68]
          - button "Відправити" [ref=e69] [cursor=pointer]
    - generic [ref=e70]:
      - text: Powered by
      - link "Redmine" [ref=e71] [cursor=pointer]:
        - /url: https://www.redmine.org/
      - text: © 2006-2023 Jean-Philippe Lang
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [active] [ref=f13e1]:
        - link [ref=f13e8] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CKBuxlUFKatzPLd7VjuwPhYWv0AiQ9viViAH8xeyk9RW_xLCrlQ4QASDBl_QHYKXmo4aII6AByb7W5wLIAQKpAr-MRGWyHFg-qAMByAPJBKoE5AFP0HTLXI0ByQOIR978c-1UfOFolbewYiPaa4BOwFz9vmG1SvO_kB3F3-PfasWuJrJiuzcMvEBO7iDHGFXb2VIlGElD_okr3jVou_SHy6xTkUEuuVd2birJJfygnRu-KVUlotUEgMDMdYXcmcKJQQwPqAoz1jJtijD66wfO0LzbyLmG8Z4MjbEQh1CklUu6lt-sxBraQNFzaQN0fZcYwNX05o1Ov3KjQ53P71swmRGENuKtX-d0-L_MqV9XopH3M_ax6z7V_apKv1rig6wiMyFKnRy5wyKoDOZqbZfxwVwafio_RHLABJGDyKbfBYgF6aGnr1mgBgKAB5_BqZgBqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlihv_z5uLuVA2ABsQn04taaUxiphoAKAZgLAcgLAaIMPCoKCgiO37ECleKxAmISChB1YS5zaWxwby5hcHAuaW9zahIKEHVhLnNpbHBvLmFuZHJvaWR4AYgBAZABAaoNAlVByA0B6g0TCK31_Pm4u5UDFd6qgwcdhcILivANAogOCdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLiThgCIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMInO78-bi7lQMV3qqDBx2FwguKEAEYASAAEgIjbfD_BwE&num=1&cid=CAQS8wEAEQoqgbNVAeYDu9_fAeYvriKBlWXLWYunGKM08T9vMcsuFZUYSsklxIlj6uE640nhJWZy36q61RYdEgwl4EpZtsvrinW1_qMHn1xxNm-oTgFg3kfGVBr0xOhnMDtpW8-1A3ReFkIfmFRjjr0lYIjszpmP0Hzq-6B7Tcx7-UuE1SoV_tVBwMDyuBAMHagQDLMHbKPk5PWPMX7f0ml8jd-F1oIoC5DaPCCqNtEMKCTstjzQsHND6gPL_yoTunQJRFPXkTqzcAP4ftdbzSyaEgA7jb50Ampuy8RluI4ot_BBTwiiUaSo424USQJFqgfgv1f8vnkYAQ&sig=AOD64_0b4s_fdr9LBCdPO9_w_uw3a_RR6g&client=ca-pub-0447284344517370&rf=1&nb=9&adurl=https://silpo.ua/offers/cinotyzhyky%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dprmd_offline_svp%26utm_term%3D02.07-08.07%26gad_source%3D5%26gad_campaignid%3D23989965033%26gclid%3DEAIaIQobChMInO78-bi7lQMV3qqDBx2FwguKEAEYASAAEgIjbfD_BwE
          - img [ref=f13e9]
        - img [ref=f13e13] [cursor=pointer]
        - button [ref=f13e15] [cursor=pointer]:
          - img [ref=f13e16]
        - iframe
```

# Test source

```ts
  1  | import { Page, expect, Locator } from "@playwright/test";
  2  | 
  3  | export class RegisterPage {
  4  |   readonly page: Page;
  5  |   readonly registerPageHeading: Locator;
  6  |   readonly loginFld: Locator;
  7  |   readonly passwordFld: Locator;
  8  |   readonly confirmPasswordFld: Locator;
  9  |   readonly firstNameFld: Locator;
  10 |   readonly lastNameFld: Locator;
  11 |   readonly emailFld: Locator;
  12 |   readonly submitBtn: Locator;
  13 |   readonly flashNotice: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.loginFld = page.locator("#user_login");
  18 |     this.passwordFld = page.locator("#user_password");
  19 |     this.confirmPasswordFld = page.locator("#user_password_confirmation");
  20 |     this.firstNameFld = page.locator("#user_firstname");
  21 |     this.lastNameFld = page.locator("#user_lastname");
  22 |     this.emailFld = page.locator("#user_mail");
  23 |     this.submitBtn = page.locator("input[type='submit'][name='commit']");
  24 |     this.flashNotice = page.locator("#flash_notice");
  25 | 
  26 |     this.registerPageHeading = page.getByRole("heading", {
  27 |       level: 2,
  28 |       name: "Зареєструватися",
  29 |     });
  30 |   }
  31 | 
  32 |   async fillField(locator: Locator, value: string) {
  33 |     await locator.fill(value);
  34 |   }
  35 | 
  36 |   async verifyLoginFld(value: string) {
  37 |     await expect(this.loginFld).toHaveValue(value);
  38 |   }
  39 | 
  40 |   async verifyPasswordFld(value: string) {
  41 |     await expect(this.passwordFld).toHaveAttribute("type", "password");
  42 |     await expect(this.passwordFld).toHaveValue(value);
  43 |   }
  44 | 
  45 |   async verifyConfirmPasswordFld(value: string) {
  46 |     await expect(this.confirmPasswordFld).toHaveAttribute("type", "password");
  47 |     await expect(this.confirmPasswordFld).toHaveValue(value);
  48 |   }
  49 | 
  50 |   async verifyFirstNameFld(value: string) {
  51 |     await expect(this.firstNameFld).toHaveValue(value);
  52 |   }
  53 | 
  54 |   async verifyLastNameFld(value: string) {
  55 |     await expect(this.lastNameFld).toHaveValue(value);
  56 |   }
  57 | 
  58 |   async verifyEmailFld(value: string) {
  59 |     await expect(this.emailFld).toHaveValue(value);
  60 |   }
  61 | 
  62 |   async clickSubmitBtn() {
> 63 |     await this.submitBtn.click();
     |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  64 |   }
  65 | 
  66 |   async verifyNoticeMessage() {
  67 |     await expect(this.flashNotice).toHaveText(
  68 |       "Обліковий запис успішно створений. Для активації Вашого облікового запису зайдіть по посиланню, яке відіслане вам електронною поштою.",
  69 |     );
  70 |   }
  71 | }
  72 | 
```