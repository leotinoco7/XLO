'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">xbox-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' : 'data-target="#xs-controllers-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' :
                                            'id="xs-controllers-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' : 'data-target="#xs-injectables-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' :
                                        'id="xs-injectables-links-module-AppModule-5d9d8a9a5e14dcf728740fef0dedec67f212be83d4a925bbabb32fa1b12885953e76632a0033f2e74379a02a8ad0723a5241a3a2a0db09b37462cd75f24bd01f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                            'id="xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                        'id="xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link" >CardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' : 'data-target="#xs-controllers-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' :
                                            'id="xs-controllers-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' }>
                                            <li class="link">
                                                <a href="controllers/CardController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' : 'data-target="#xs-injectables-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' :
                                        'id="xs-injectables-links-module-CardModule-865bfa27c11d31bd3faff6310e3ad76608df5b0a4e4115cf0a12fb9457f51a13f3f7fa666e12aa3b998684849715c2b489bc4d2ec7b899bd697181106791064f"' }>
                                        <li class="link">
                                            <a href="injectables/CardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CollectionModule.html" data-type="entity-link" >CollectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' : 'data-target="#xs-controllers-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' :
                                            'id="xs-controllers-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' }>
                                            <li class="link">
                                                <a href="controllers/CollectionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' : 'data-target="#xs-injectables-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' :
                                        'id="xs-injectables-links-module-CollectionModule-0105a771942c5dffc08aca152761e1eb3c31faf7f81663d1fb021717177aefbb3b27ba6cd6cbf88c717ddf6e6d02b52bdade3aa949e4a5360317be284a52c0e0"' }>
                                        <li class="link">
                                            <a href="injectables/CollectionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CollectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeckModule.html" data-type="entity-link" >DeckModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' : 'data-target="#xs-controllers-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' :
                                            'id="xs-controllers-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' }>
                                            <li class="link">
                                                <a href="controllers/DeckController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeckController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' : 'data-target="#xs-injectables-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' :
                                        'id="xs-injectables-links-module-DeckModule-90b8c813ab870bc4f719f04a7a7fe04bf8f0c0ff912dd1ef8a352a4f1107ad42076a17de3acf8ad06a10dc0aa5d5559fd605457ca4fb177d36615f1f23c97202"' }>
                                        <li class="link">
                                            <a href="injectables/DeckService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeckService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PackModule.html" data-type="entity-link" >PackModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' : 'data-target="#xs-controllers-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' :
                                            'id="xs-controllers-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' }>
                                            <li class="link">
                                                <a href="controllers/PackController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' : 'data-target="#xs-injectables-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' :
                                        'id="xs-injectables-links-module-PackModule-2311583725076b98b6c357bd9ae931d8640318fe1a4585f249dcac6fcbc86c2be1578aa62015bfd5d5708112f7eca0e376c2db6b89d904a430558c0d0bfe3ba9"' }>
                                        <li class="link">
                                            <a href="injectables/PackService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PackService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' : 'data-target="#xs-controllers-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' :
                                            'id="xs-controllers-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' : 'data-target="#xs-injectables-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' :
                                        'id="xs-injectables-links-module-UsersModule-9f8c74e4a3d199078c3c27d25c20fe808c59aa3405cef639723b50b1ba67db1d0dab8876736d034064aafd73f3a01fa63a0b10b4162d78036dd799a1de7c5a49"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CardController.html" data-type="entity-link" >CardController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CollectionController.html" data-type="entity-link" >CollectionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DeckController.html" data-type="entity-link" >DeckController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PackController.html" data-type="entity-link" >PackController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Card.html" data-type="entity-link" >Card</a>
                            </li>
                            <li class="link">
                                <a href="classes/Collection.html" data-type="entity-link" >Collection</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCardDto.html" data-type="entity-link" >CreateCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCollectionDto.html" data-type="entity-link" >CreateCollectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDeckDto.html" data-type="entity-link" >CreateDeckDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePackDto.html" data-type="entity-link" >CreatePackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deck.html" data-type="entity-link" >Deck</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pack.html" data-type="entity-link" >Pack</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCardDto.html" data-type="entity-link" >UpdateCardDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCollectionDto.html" data-type="entity-link" >UpdateCollectionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDeckDto.html" data-type="entity-link" >UpdateDeckDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePackDto.html" data-type="entity-link" >UpdatePackDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CardService.html" data-type="entity-link" >CardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollectionService.html" data-type="entity-link" >CollectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeckService.html" data-type="entity-link" >DeckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PackService.html" data-type="entity-link" >PackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});