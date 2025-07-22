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
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Back-End-September-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Back&#8209;End' />
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
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Applications-June-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Applications' />
                            <TooltipComposer id={tooltipTypes.javascript.id} content={tooltipTypes.javascript.content} children={
                                <span key='tooltip-javascript' className="javascript-icon-container" data-tooltip-id="javascript">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="javascript-icon" viewBox="0 0 128 128">
                                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                                        <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
                                    </svg>
                                </span>
                            } />
                            <TooltipComposer id={tooltipTypes.html.id} content={tooltipTypes.html.content} children={
                                <span key='tooltip-html' className="html-icon-container" data-tooltip-id="html">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="html-icon" viewBox="0 0 128 128">
                                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
                                        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
                                        <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
                                        <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
                                    </svg>
                                </span>
                            } />
                            <TooltipComposer id={tooltipTypes.css.id} content={tooltipTypes.css.content} children={
                                <span key='tooltip-css' className="css-icon-container" data-tooltip-id="css">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="css-icon" viewBox="0 0 128 128">
                                        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
                                        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
                                        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
                                        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
                                        <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
                                        <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
                                    </svg>
                                </span>
                            } />
                            <TooltipComposer id={tooltipTypes['lit-html'].id} content={tooltipTypes['lit-html'].content} children={
                                <span key='tooltip-lit-html' className="lit-html-icon-container" data-tooltip-id="lit-html">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lit-html-icon" viewBox="0 0 768 960">
                                        <path d="M192 576l96-288 432 432-144 240-192-192h-96" fill="#00e8ff" />
                                        <path d="M384 768V384l192-192v384m-480 0h96l96 192-96 192L0 768z" fill="#283198" fillRule="evenodd" />
                                        <path d="M192 576V192L384 0v384m192 576V576l192-192v384M0 768V384l192 192" fill="#324fff" />
                                        <path d="M192 960V576l192 192" fill="#0ff" />
                                    </svg>
                                </span>
                            } />
                            <TooltipComposer id={tooltipTypes.playwright.id} content={tooltipTypes.playwright.content} children={
                                <span key='tooltip-playwright' className="playwright-icon-container" data-tooltip-id="playwright">
                                    <svg className="playwright-icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.662 70.898c-4.124 1.17-6.829 3.222-8.611 5.272 1.707-1.494 3.993-2.865 7.077-3.739 3.155-.894 5.846-.888 8.069-.459v-1.739c-1.897-.173-4.072-.035-6.536.664ZM34.863 56.28l-15.314 4.035s.279.394.796.92l12.984-3.421s-.184 2.371-1.782 4.492c3.022-2.287 3.316-6.025 3.316-6.025Zm12.819 35.991C26.131 98.076 14.729 73.1 11.277 60.137 9.682 54.153 8.986 49.621 8.8 46.697a4.955 4.955 0 0 1 .011-.794c-1.118.068-1.653.649-1.544 2.328.186 2.923.882 7.454 2.477 13.44 3.45 12.961 14.854 37.937 36.405 32.132 4.691-1.264 8.215-3.565 10.86-6.504-2.438 2.202-5.49 3.937-9.327 4.972Zm4.05-51.276v1.534h8.453c-.173-.543-.348-1.032-.522-1.534h-7.932Z" fill="#2D4552" />
                                        <path d="M62.074 53.627c3.802 1.08 5.812 3.745 6.875 6.104l4.239 1.204s-.578-8.255-8.045-10.376c-6.985-1.985-11.284 3.881-11.807 4.64 2.032-1.448 4.999-2.633 8.738-1.572Zm33.741 6.142c-6.992-1.994-11.289 3.884-11.804 4.633 2.034-1.446 4.999-2.632 8.737-1.566 3.796 1.081 5.804 3.743 6.87 6.104l4.245 1.208s-.588-8.257-8.048-10.379Zm-4.211 21.766-35.261-9.858s.382 1.935 1.846 4.441l29.688 8.3c2.444-1.414 3.726-2.883 3.726-2.883Zm-24.446 21.218c-27.92-7.485-24.544-43.059-20.027-59.916 1.86-6.947 3.772-12.11 5.358-15.572-.946-.195-1.73.304-2.504 1.878-1.684 3.415-3.837 8.976-5.921 16.76-4.516 16.857-7.892 52.429 20.027 59.914 13.159 3.525 23.411-1.833 31.053-10.247-7.254 6.57-16.515 10.253-27.986 7.182Z" fill="#2D4552" />
                                        <path d="M51.732 83.935v-7.179l-19.945 5.656s1.474-8.563 11.876-11.514c3.155-.894 5.846-.888 8.069-.459V40.995h9.987c-1.087-3.36-2.139-5.947-3.023-7.744-1.461-2.975-2.96-1.003-6.361 1.842-2.396 2.001-8.45 6.271-17.561 8.726-9.111 2.457-16.476 1.805-19.55 1.273-4.357-.752-6.636-1.708-6.422 1.605.186 2.923.882 7.455 2.477 13.44 3.45 12.962 14.854 37.937 36.405 32.132 5.629-1.517 9.603-4.515 12.357-8.336h-8.309v.002Zm-32.185-23.62 15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371Z" fill="#E2574C" />
                                        <path d="M109.372 41.336c-3.981.698-13.532 1.567-25.336-1.596-11.807-3.162-19.64-8.692-22.744-11.292-4.4-3.685-6.335-6.246-8.24-2.372-1.684 3.417-3.837 8.977-5.921 16.762-4.516 16.857-7.892 52.429 20.027 59.914 27.912 7.479 42.772-25.017 47.289-41.875 2.084-7.783 2.998-13.676 3.25-17.476.287-4.305-2.67-3.055-8.324-2.064ZM53.28 55.282s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376L53.28 55.282Zm18.215 30.706c-13.125-3.845-15.15-14.311-15.15-14.311l35.259 9.858c0-.002-7.117 8.25-20.109 4.453Zm12.466-21.51s4.394-6.838 11.854-4.711c7.46 2.124 8.048 10.379 8.048 10.379l-19.902-5.668Z" fill="#2EAD33" />
                                        <path d="M44.762 78.733 31.787 82.41s1.41-8.029 10.968-11.212l-7.347-27.573-.635.193c-9.111 2.457-16.476 1.805-19.55 1.273-4.357-.751-6.636-1.708-6.422 1.606.186 2.923.882 7.454 2.477 13.44 3.45 12.961 14.854 37.937 36.405 32.132l.635-.199-3.555-13.337ZM19.548 60.315l15.316-4.035s-.446 5.892-6.188 7.405c-5.743 1.512-9.128-3.371-9.128-3.371Z" fill="#D65348" />
                                        <path d="m72.086 86.132-.594-.144c-13.125-3.844-15.15-14.311-15.15-14.311l18.182 5.082L84.15 39.77l-.116-.031c-11.807-3.162-19.64-8.692-22.744-11.292-4.4-3.685-6.335-6.246-8.24-2.372-1.682 3.417-3.836 8.977-5.92 16.762-4.516 16.857-7.892 52.429 20.027 59.914l.572.129 4.357-16.748Zm-18.807-30.85s4.4-6.843 11.862-4.722c7.467 2.121 8.045 10.376 8.045 10.376l-19.907-5.654Z" fill="#1D8D22" />
                                        <path d="m45.423 78.544-3.48.988c.822 4.634 2.271 9.082 4.545 13.011.396-.087.788-.163 1.192-.273a25.224 25.224 0 0 0 2.98-1.023c-2.541-3.771-4.222-8.114-5.237-12.702Zm-1.359-32.64c-1.788 6.674-3.388 16.28-2.948 25.915a20.061 20.061 0 0 1 2.546-.923l.644-.144c-.785-10.292.912-20.78 2.825-27.915a139.404 139.404 0 0 1 1.455-5.05 45.171 45.171 0 0 1-2.578 1.53 132.234 132.234 0 0 0-1.944 6.587Z" fill="#C04B41" />
                                    </svg>
                                </span>
                            } />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Javascript-Advanced-May-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Javascript Advanced' />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Fundamentals-January-2023" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Programming Fundamentals with Javascript' />
                        </li>
                    </Link>
                    <Link to="https://github.com/JivkoKarakashev/SoftUni-Education/tree/main/Programming-Basics-November-2022" target="new_blank">
                        <li className={style["link"]}>
                            <SvgIconProvider iconName='github' textContent='Programming Basics with JavaScript' />
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