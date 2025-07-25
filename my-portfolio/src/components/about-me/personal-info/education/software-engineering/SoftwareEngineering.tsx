import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import style from "./SoftwareEngineering.module.css";
import { TooltipComposer, tooltipTypes } from "../../../../icon-with-tooltip/IconWithTooltip";
import { SvgIconProvider } from "../../../../svg-icon-provider/svg-icon-provider";

const SoftwareEngineering = (): ReactElement => {
    return (
        <section className={style["content"]}>
            <nav className={style["nav"]}>
                <ul>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Angular-February-2024" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Angular' />
                            <TooltipComposer id={tooltipTypes.angular.id} content={tooltipTypes.angular.content} children={
                                <SvgIconProvider iconName="angular" tooltipProps={{ key: 'angular', "data-tooltip-id": 'angular' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.typescript.id} content={tooltipTypes.typescript.content} children={
                                <SvgIconProvider iconName='typescript' tooltipProps={{ key: 'typescript', "data-tooltip-id": 'typescript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.rxjs.id} content={tooltipTypes.rxjs.content} children={
                                <SvgIconProvider iconName='rxjs' tooltipProps={{ key: 'rxjs', "data-tooltip-id": 'rxjs' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.html.id} content={tooltipTypes.html.content} children={
                                <SvgIconProvider iconName='html' tooltipProps={{ key: 'html', "data-tooltip-id": 'html' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.css.id} content={tooltipTypes.css.content} children={
                                <SvgIconProvider iconName='css' tooltipProps={{ key: 'css', "data-tooltip-id": 'css' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.fontawesome.id} content={tooltipTypes.fontawesome.content} children={
                                <SvgIconProvider iconName='fontawesome' tooltipProps={{ key: 'fontawesome', "data-tooltip-id": 'fontawesome' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.firebase.id} content={tooltipTypes.firebase.content} children={
                                <SvgIconProvider iconName='firebase' tooltipProps={{ key: 'firebase', "data-tooltip-id": 'firebase' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['google-cloud'].id} content={tooltipTypes['google-cloud'].content} children={
                                <SvgIconProvider iconName='google-cloud' tooltipProps={{ key: 'google-cloud', "data-tooltip-id": 'google-cloud' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.cloudflare.id} content={tooltipTypes.cloudflare.content} children={
                                <SvgIconProvider iconName='cloudflare' tooltipProps={{ key: 'cloudflare', "data-tooltip-id": 'cloudflare' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.eslint.id} content={tooltipTypes.eslint.content} children={
                                <SvgIconProvider iconName='eslint' tooltipProps={{ key: 'eslint', "data-tooltip-id": 'eslint' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/HTML-%26-CSS-January-2024" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='HTML &#38; CSS' />
                            <TooltipComposer id={tooltipTypes.html.id} content={tooltipTypes.html.content} children={
                                <SvgIconProvider iconName='html' tooltipProps={{ key: 'html', "data-tooltip-id": 'html' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.css.id} content={tooltipTypes.css.content} children={
                                <SvgIconProvider iconName='css' tooltipProps={{ key: 'css', "data-tooltip-id": "css" }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": "git" }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/React-JS-October-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='React JS' />
                            <TooltipComposer id={tooltipTypes.react.id} content={tooltipTypes.react.content} children={
                                <SvgIconProvider iconName='react' tooltipProps={{ key: 'react', "data-tooltip-id": 'react' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.html.id} content={tooltipTypes.html.content} children={
                                <SvgIconProvider iconName='html' tooltipProps={{ key: 'html', "data-tooltip-id": 'html' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.css.id} content={tooltipTypes.css.content} children={
                                <SvgIconProvider iconName='css' tooltipProps={{ key: 'css', "data-tooltip-id": 'css' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.fontawesome.id} content={tooltipTypes.fontawesome.content} children={
                                <SvgIconProvider iconName='fontawesome' tooltipProps={{ key: 'fontawesome', "data-tooltip-id": 'fontawesome' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.firebase.id} content={tooltipTypes.firebase.content} children={
                                <SvgIconProvider iconName='firebase' tooltipProps={{ key: "firebase", "data-tooltip-id": 'firebase' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['google-cloud'].id} content={tooltipTypes['google-cloud'].content} children={
                                <SvgIconProvider iconName='google-cloud' tooltipProps={{ key: 'google-cloud', "data-tooltip-id": 'google-cloud' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.cloudflare.id} content={tooltipTypes.cloudflare.content} children={
                                <SvgIconProvider iconName='cloudflare' tooltipProps={{ key: 'cloudflare', "data-tooltip-id": 'cloudflare' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.eslint.id} content={tooltipTypes.eslint.content} children={
                                <SvgIconProvider iconName='eslint' tooltipProps={{ key: 'eslint', "data-tooltip-id": 'eslint' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Back-End-September-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Back&#45;End' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.nodejs.id} content={tooltipTypes.nodejs.content} children={
                                <SvgIconProvider iconName='nodejs' tooltipProps={{ key: 'nodejs', "data-tooltip-id": 'nodejs' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.expressjs.id} content={tooltipTypes.expressjs.content} children={
                                <SvgIconProvider iconName='expressjs' tooltipProps={{ key: 'expressjs', "data-tooltip-id": 'expressjs' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.mongodb.id} content={tooltipTypes.mongodb.content} children={
                                <SvgIconProvider iconName='mongodb' tooltipProps={{ key: 'mongodb', "data-tooltip-id": 'mongodb' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.mongoosejs.id} content={tooltipTypes.mongoosejs.content} children={
                                <SvgIconProvider iconName='mongoosejs' tooltipProps={{ key: 'mongoosejs', "data-tooltip-id": 'mongoosejs' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.handlebars.id} content={tooltipTypes.handlebars.content} children={
                                <SvgIconProvider iconName='handlebars' tooltipProps={{ key: 'handlebars', "data-tooltip-id": 'handlebars' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['json-web-tokens'].id} content={tooltipTypes['json-web-tokens'].content} children={
                                <SvgIconProvider iconName='json-web-tokens' tooltipProps={{ key: 'json-web-tokens', "data-tooltip-id": 'json-web-tokens' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.nodemon.id} content={tooltipTypes.nodemon.content} children={
                                <SvgIconProvider iconName='nodemon' tooltipProps={{ key: 'nodemon', "data-tooltip-id": 'nodemon' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Applications-June-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Applications' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.html.id} content={tooltipTypes.html.content} children={
                                <SvgIconProvider iconName='html' tooltipProps={{ key: 'html', "data-tooltip-id": 'html' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.css.id} content={tooltipTypes.css.content} children={
                                <SvgIconProvider iconName='css' tooltipProps={{ key: 'css', "data-tooltip-id": 'css' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['lit-html'].id} content={tooltipTypes['lit-html'].content} children={
                                <SvgIconProvider iconName='lit-html' tooltipProps={{ key: 'lit-html', "data-tooltip-id": 'lit-html' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.playwright.id} content={tooltipTypes.playwright.content} children={
                                <SvgIconProvider iconName='playwright' tooltipProps={{ key: 'playwright', "data-tooltip-id": 'playwright' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.mocha.id} content={tooltipTypes.mocha.content} children={
                                <SvgIconProvider iconName='mocha' tooltipProps={{ key: 'mocha', "data-tooltip-id": 'mocha' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.chai.id} content={tooltipTypes.chai.content} children={
                                <SvgIconProvider iconName='chai' tooltipProps={{ key: 'chai', "data-tooltip-id": 'chai' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Advanced-May-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Advanced' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.mocha.id} content={tooltipTypes.mocha.content} children={
                                <SvgIconProvider iconName='mocha' tooltipProps={{ key: 'mocha', "data-tooltip-id": 'mocha' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.chai.id} content={tooltipTypes.chai.content} children={
                                <SvgIconProvider iconName='chai' tooltipProps={{ key: 'chai', "data-tooltip-id": 'chai' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Fundamentals-January-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Programming Fundamentals with Javascript' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Basics-November-2022" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Programming Basics with JavaScript' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <SvgIconProvider iconName='javascript' tooltipProps={{ key: 'javascript', "data-tooltip-id": 'javascript' }} />
                            } />
                            <TooltipComposer id={tooltipTypes.git.id} content={tooltipTypes.git.content} children={
                                <SvgIconProvider iconName='git' tooltipProps={{ key: 'git', "data-tooltip-id": 'git' }} />
                            } />
                            <TooltipComposer id={tooltipTypes['vs-code'].id} content={tooltipTypes['vs-code'].content} children={
                                <SvgIconProvider iconName='vs-code' tooltipProps={{ key: 'vs-code', "data-tooltip-id": 'vs-code' }} />
                            } />
                        </li>
                    </Link>
                </ul>
            </nav>
        </section>
    );
};

export {
    SoftwareEngineering
}