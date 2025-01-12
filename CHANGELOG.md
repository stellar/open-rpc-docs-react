# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/stellar/open-rpc-docs-react/compare/v0.2.1...HEAD)

## [v0.2.1](https://github.com/stellar/open-rpc-docs-react/compare/v0.2.0...v0.2.1)

### Fixed

- Include the extra components passed in the `Method` component interface ([#16](https://github.com/stellar/open-rpc-docs-react/pull/16))

## [v0.2.0](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.2.0...stellar:open-rpc-docs-react:v0.2.0)

### Changed

- Update and adapt Github actions ([#14](https://github.com/stellar/open-rpc-docs-react/pull/14), [#13](https://github.com/stellar/open-rpc-docs-react/pull/13), [#10](https://github.com/stellar/open-rpc-docs-react/pull/10))
- Add tests for Stellar-specific customizations ([#11](https://github.com/stellar/open-rpc-docs-react/pull/11))
- Output different example server URLs for `stellar-rpc` and `anchor-platform` methods in `ExamplePairing.tsx` ([#9](https://github.com/stellar/open-rpc-docs-react/pull/9))
- Add Stellar customizations from our pre-existing patchy, hacky workaround ([#15](https://github.com/stellar/open-rpc-docs-react/pull/5))

---

> _Note:_ Changelog entries from the MetaMask package are preserved below.

## [0.2.0](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.1.2...v0.2.0)

- feat(dependency): updated react version to 18 ([#30](https://github.com/MetaMask/open-rpc-docs-react/pull/30))

## [0.1.2](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.1.1...v0.1.2)

- Fixed stoplight css scoping ([#19](https://github.com/MetaMask/open-rpc-docs-react/pull/19))

## [0.1.1](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.1.0...v0.1.1)

- handle when meatamask is not installed ([#17](https://github.com/MetaMask/open-rpc-docs-react/pull/17))

## [0.1.0](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.0.3...v0.1.0)

- Fixed alignemnt of interactive method ([#15](https://github.com/MetaMask/open-rpc-docs-react/pull/15))
- Fixed linking issues ([#14](https://github.com/MetaMask/open-rpc-docs-react/pull/14))
- Removed inline on h1 tag in Method ([#13](https://github.com/MetaMask/open-rpc-docs-react/pull/13))
- Fixed repo urls ([#12](https://github.com/MetaMask/open-rpc-docs-react/pull/12))

## [0.0.3](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.0.2...v0.0.3)

- Fixed error that happens with boolean schemas ([#10](https://github.com/MetaMask/openrpc-docs-react/pull/10))

## [0.0.2](https://github.com/MetaMask/open-rpc-docs-react/compare/v0.0.1...v0.0.2)

- Change json-schema-viewer back to stoplight ([#7](https://github.com/MetaMask/openrpc-docs-react/pull/7))
- Fixed tests that used ESM ([#8](https://github.com/MetaMask/openrpc-docs-react/pull/8))
- fix: remove unused deps ([#6](https://github.com/MetaMask/openrpc-docs-react/pull/6))
- 0.0.1 ([#5](https://github.com/MetaMask/openrpc-docs-react/pull/5))
- Changed CODEOWNERS
- Changed README and package name
- Fixed tests
- Fixed tests and linting
- Added metamask module template
- Use fork of stoplight and fixup content descriptor formatting
- Remove the schema heading
- Add padding to sections inside of methods
- Change text for interactive method
- Update method formatting
- Remove data section of error table
- remove circle ci stuff that isnt used
- Bumped version in package.json
- Fixed query string decoding and readable url with querystring
- Changed package name
- Added query string support for sharing filled out requests
- Fixed input widths + remove console logs + padding on headers
- Fixed react-json-view
- Fixed react-json-view imports
- Removed react-json-view
- Added default example pairings and better styling for inline errors
- wip
- get stoplight/json-schema-viewer working
- Added method tsx and initial tests
- Fixed some styles up to look a little cleaner
- wip
- Forked from @open-rpc/docs-react
- feat: add onMethodToggle
- fix: method expanded guards
- fix: add method as id to expansion panel for deep linking
- feat: per method default expanded uiSchema
- feat: add uiSchema to hide contentDescriptors
- fix: add syntax highlighted markdown tests
- fix: use commonjs version of prism styles
- fix: add markdown code syntax highlighting
- fix: add syntax highlighted markdown
- fix: paramStructure examples support
- fix: improve test coverage of Documentation component
- fix: add test for multiple fallback examples
- fix: dont use existing object for example pairings fallback
- fix: ts version
- fix: add coverage for onClick
- fix: add test coverage for schema.examples
- fix: remove guard for method.examples to allow schema.examples fallback
- fix: improve test coverage
- fix: fallback example pairings to schema examples
- fix(examplePairing): add more test coverage
- Merge branch 'fix/example-pairing-by-name' of <https://github.com/open-rpc/docs-react> into fix/example-pairing-by-name
- fix(examplePairing): add tests for by-name and empty position
- Update README.md
- fix: add examples paramStructure by-name support
- fix(tests): jest + root level test
- feat: add json schem to react tree to better visualize json schema
- fix: content descriptors should overflow-x scroll
- fix(JSON Schema Objects): display key names and title separately
- fix: json schema object render
- fix: true/false display
- fix: add color map for json schema types
- fix: handle recursive json schema
- Update src/Methods/Methods.tsx
- Update src/Methods/Methods.test.tsx
- fix: add defaultExpanded test
- fix: test disableTransitionProps
- fix(tests): add disableTransitionProps
- fix: remove unneeded IState
- fix: add transition props + upgrade react
- build(deps-dev): bump typescript from 3.5.1 to 3.6.3
- build(deps-dev): bump jest from 24.8.0 to 24.9.0
- build(deps): bump @open-rpc/examples from 1.3.3 to 1.3.4
- feat: add method plugin + fix dark theme descriptions
- build(deps-dev): bump typescript from 3.5.1 to 3.5.3
- build(deps-dev): bump @open-rpc/meta-schema from 1.4.3 to 1.5.3
- build(deps): bump lodash from 4.17.11 to 4.17.13
- fix: update examples
- fix: bump meta-schema version
- build(deps-dev): bump tslint from 5.17.0 to 5.18.0
- build(deps): bump react-markdown from 4.0.8 to 4.1.0
- build(deps-dev): bump @types/lodash from 4.14.134 to 4.14.135
- build(deps-dev): bump @types/jest from 24.0.13 to 24.0.15
- build(deps-dev): bump json-schema-ref-parser from 6.1.0 to 7.0.1
- build(deps-dev): bump @types/lodash from 4.14.130 to 4.14.134
- build(deps): bump @open-rpc/examples from 1.3.1 to 1.3.3
- build(deps-dev): bump tslint from 5.16.0 to 5.17.0
- build(deps-dev): bump @types/node from 12.0.2 to 12.0.4
- build(deps-dev): bump typescript from 3.4.5 to 3.5.1
- build(deps-dev): bump @types/lodash from 4.14.129 to 4.14.130
- build(deps-dev): bump @types/node from 11.12.1 to 12.0.2
- build(deps-dev): bump @types/lodash from 4.14.125 to 4.14.129
- build(deps-dev): bump @types/jest from 24.0.12 to 24.0.13
- build(deps-dev): bump @types/lodash from 4.14.124 to 4.14.125
- Merge branch 'master' into fix/export_more_components
- build(deps-dev): bump @types/lodash from 4.14.123 to 4.14.124
- fix(exports): expose more than Documentation component
- fix(JSON Schema): nested items/objects and oneOf
- build(deps-dev): bump jest from 24.7.1 to 24.8.0
- build(deps): bump @open-rpc/examples from 1.3.0 to 1.3.1
- build(deps): bump react-dom from 16.8.5 to 16.8.6
- build(deps): bump react from 16.8.5 to 16.8.6
- build(deps): bump @material-ui/core from 3.9.2 to 3.9.3
- build(deps-dev): bump @types/react-dom from 16.8.3 to 16.8.4
- build(deps-dev): bump ts-jest from 24.0.0 to 24.0.2
- build(deps): bump react-markdown from 4.0.6 to 4.0.8
- build(deps-dev): bump tslint from 5.14.0 to 5.16.0
- build(deps-dev): bump typescript from 3.4.2 to 3.4.5
- build(deps-dev): bump @types/jest from 24.0.11 to 24.0.12
- fix: npm audit fix
- fix: upgrade meta schema to 1.3.2
- chore(ci): add ci support for forked PRs
- build(deps-dev): bump typescript from 3.3.4000 to 3.4.2
- build(deps-dev): bump jest from 24.5.0 to 24.7.1
- fix: tags
- fix: add tags
- build(deps-dev): bump @types/node from 11.12.0 to 11.12.1
- build(deps-dev): bump @types/node from 11.11.7 to 11.12.0
- build(deps): bump react-dom from 16.8.4 to 16.8.5
- build(deps): bump react from 16.8.4 to 16.8.5
- build(deps-dev): bump @types/node from 11.11.4 to 11.11.7
- build(deps): bump @open-rpc/meta-schema from 1.1.0 to 1.2.1
- fix: remove whitespace from .releaserc
- fix: add tagFormat to releaserc
- Merge branch 'master' into fix/add-server-variables
- fix: add server variables
- fix: duplicate method keys
- fix: add links support
- fix: add example result screenshot to readme
- fix: better create-react-app example
- fix: create-react-app command
- fix: write readme on how to use
- fix: allow react tree json options as any
- fix: require schema for documentation
- fix: remove private from package.json
- fix: use package.json version from semantic-release
- fix: add linting
- fix: jest for npm test
- fix: change package.json version
- feat: add circle config with semantic release
- feat: initial commit

## [0.0.1](https://github.com/MetaMask/open-rpc-docs-react/releases/tag/v0.0.1)

- Changed CODEOWNERS
- Changed README and package name
- Fixed tests
- Fixed tests and linting
- Added metamask module template
- Use fork of stoplight and fixup content descriptor formatting
- Remove the schema heading
- Add padding to sections inside of methods
- Change text for interactive method
- Update method formatting
- Remove data section of error table
- remove circle ci stuff that isnt used
- Bumped version in package.json
- Fixed query string decoding and readable url with querystring
- Changed package name
- Added query string support for sharing filled out requests
- Fixed input widths + remove console logs + padding on headers
- Fixed react-json-view
- Fixed react-json-view imports
- Removed react-json-view
- Added default example pairings and better styling for inline errors
- wip
- get stoplight/json-schema-viewer working
- Added method tsx and initial tests
- Fixed some styles up to look a little cleaner
- wip
- Forked from @open-rpc/docs-react
- feat: add onMethodToggle
- fix: method expanded guards
- fix: add method as id to expansion panel for deep linking
- feat: per method default expanded uiSchema
- feat: add uiSchema to hide contentDescriptors
- fix: add syntax highlighted markdown tests
- fix: use commonjs version of prism styles
- fix: add markdown code syntax highlighting
- fix: add syntax highlighted markdown
- fix: paramStructure examples support
- fix: improve test coverage of Documentation component
- fix: add test for multiple fallback examples
- fix: dont use existing object for example pairings fallback
- fix: ts version
- fix: add coverage for onClick
- fix: add test coverage for schema.examples
- fix: remove guard for method.examples to allow schema.examples fallback
- fix: improve test coverage
- fix: fallback example pairings to schema examples
- fix(examplePairing): add more test coverage
- Merge branch 'fix/example-pairing-by-name' of <https://github.com/open-rpc/docs-react> into fix/example-pairing-by-name
- fix(examplePairing): add tests for by-name and empty position
- Update README.md
- fix: add examples paramStructure by-name support
- fix(tests): jest + root level test
- feat: add json schem to react tree to better visualize json schema
- fix: content descriptors should overflow-x scroll
- fix(JSON Schema Objects): display key names and title separately
- fix: json schema object render
- fix: true/false display
- fix: add color map for json schema types
- fix: handle recursive json schema
- Update src/Methods/Methods.tsx
- Update src/Methods/Methods.test.tsx
- fix: add defaultExpanded test
- fix: test disableTransitionProps
- fix(tests): add disableTransitionProps
- fix: remove unneeded IState
- fix: add transition props + upgrade react
- build(deps-dev): bump typescript from 3.5.1 to 3.6.3
- build(deps-dev): bump jest from 24.8.0 to 24.9.0
- build(deps): bump @open-rpc/examples from 1.3.3 to 1.3.4
- feat: add method plugin + fix dark theme descriptions
- build(deps-dev): bump typescript from 3.5.1 to 3.5.3
- build(deps-dev): bump @open-rpc/meta-schema from 1.4.3 to 1.5.3
- build(deps): bump lodash from 4.17.11 to 4.17.13
- fix: update examples
- fix: bump meta-schema version
- build(deps-dev): bump tslint from 5.17.0 to 5.18.0
- build(deps): bump react-markdown from 4.0.8 to 4.1.0
- build(deps-dev): bump @types/lodash from 4.14.134 to 4.14.135
- build(deps-dev): bump @types/jest from 24.0.13 to 24.0.15
- build(deps-dev): bump json-schema-ref-parser from 6.1.0 to 7.0.1
- build(deps-dev): bump @types/lodash from 4.14.130 to 4.14.134
- build(deps): bump @open-rpc/examples from 1.3.1 to 1.3.3
- build(deps-dev): bump tslint from 5.16.0 to 5.17.0
- build(deps-dev): bump @types/node from 12.0.2 to 12.0.4
- build(deps-dev): bump typescript from 3.4.5 to 3.5.1
- build(deps-dev): bump @types/lodash from 4.14.129 to 4.14.130
- build(deps-dev): bump @types/node from 11.12.1 to 12.0.2
- build(deps-dev): bump @types/lodash from 4.14.125 to 4.14.129
- build(deps-dev): bump @types/jest from 24.0.12 to 24.0.13
- build(deps-dev): bump @types/lodash from 4.14.124 to 4.14.125
- Merge branch 'master' into fix/export_more_components
- build(deps-dev): bump @types/lodash from 4.14.123 to 4.14.124
- fix(exports): expose more than Documentation component
- fix(JSON Schema): nested items/objects and oneOf
- build(deps-dev): bump jest from 24.7.1 to 24.8.0
- build(deps): bump @open-rpc/examples from 1.3.0 to 1.3.1
- build(deps): bump react-dom from 16.8.5 to 16.8.6
- build(deps): bump react from 16.8.5 to 16.8.6
- build(deps): bump @material-ui/core from 3.9.2 to 3.9.3
- build(deps-dev): bump @types/react-dom from 16.8.3 to 16.8.4
- build(deps-dev): bump ts-jest from 24.0.0 to 24.0.2
- build(deps): bump react-markdown from 4.0.6 to 4.0.8
- build(deps-dev): bump tslint from 5.14.0 to 5.16.0
- build(deps-dev): bump typescript from 3.4.2 to 3.4.5
- build(deps-dev): bump @types/jest from 24.0.11 to 24.0.12
- fix: npm audit fix
- fix: upgrade meta schema to 1.3.2
- chore(ci): add ci support for forked PRs
- build(deps-dev): bump typescript from 3.3.4000 to 3.4.2
- build(deps-dev): bump jest from 24.5.0 to 24.7.1
- fix: tags
- fix: add tags
- build(deps-dev): bump @types/node from 11.12.0 to 11.12.1
- build(deps-dev): bump @types/node from 11.11.7 to 11.12.0
- build(deps): bump react-dom from 16.8.4 to 16.8.5
- build(deps): bump react from 16.8.4 to 16.8.5
- build(deps-dev): bump @types/node from 11.11.4 to 11.11.7
- build(deps): bump @open-rpc/meta-schema from 1.1.0 to 1.2.1
- fix: remove whitespace from .releaserc
- fix: add tagFormat to releaserc
- Merge branch 'master' into fix/add-server-variables
- fix: add server variables
- fix: duplicate method keys
- fix: add links support
- fix: add example result screenshot to readme
- fix: better create-react-app example
- fix: create-react-app command
- fix: write readme on how to use
- fix: allow react tree json options as any
- fix: require schema for documentation
- fix: remove private from package.json
- fix: use package.json version from semantic-release
- fix: add linting
- fix: jest for npm test
- fix: change package.json version
- feat: add circle config with semantic release
- feat: initial commit
