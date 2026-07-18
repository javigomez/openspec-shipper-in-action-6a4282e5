# OpenSpec Shipper Demo

Tiny Node.js Hello World project prepared for you to see `openspec-shipper` in action with OpenSpec.

## What is OpenSpec Shipper?
OpenSpec Shipper turns your OpenSpec changes into a repeatable delivery queue: it prepares a workspace, implements each change with an AI coding agent, opens the PR, waits for merge, archives the spec, and cleans up after itself. Instead of babysitting every step, you describe the changes once in queue.md and let the workflow move them forward safely phase by phase. It keeps OpenSpec as the source of truth while adding the missing automation layer around Git, GitHub, worktrees, and agent execution. The result is a calmer way to ship specs: visible, resumable, and designed so a human only steps in when judgment or permissions are actually needed.

## See it in action

```bash
npm install -D openspec-shipper
npx openspec-shipper init
```

From this repository, after installing and initializing the package:

```bash
npx openspec-shipper doctor
```

Now you are ready to create a small batch of changes to implement through the queue.

The repository includes four active OpenSpec changes for a queue demo. Three of
them form a dependency chain, and one is intentionally independent so OpenSpec
Shipper can show concurrent work:

```text
openspec/changes/add-name-greeting
openspec/changes/add-spanish-greeting
openspec/changes/add-shouting-greeting
openspec/changes/add-demo-banner
```

Either copy the change names into `.openspec-shipper/queue.md` like:

```md
- [ ] deliver add-name-greeting
- [ ] deliver add-spanish-greeting <!-- depends_on: add-name-greeting -->
- [ ] deliver add-shouting-greeting <!-- depends_on: add-spanish-greeting -->
- [ ] deliver add-demo-banner
```

Or use the CLI commands:

```bash
npx openspec-shipper queue add add-name-greeting
npx openspec-shipper queue add add-spanish-greeting --depends-on add-name-greeting
npx openspec-shipper queue add add-shouting-greeting --depends-on add-spanish-greeting
npx openspec-shipper queue add add-demo-banner
npx openspec-shipper queue dry-run
```

When the dry-run looks right, run the queue:

```bash
npx openspec-shipper queue run
```

The default `deliver` flow is:

```text
prepare_worktree -> implement -> push -> waiting_for_merge -> sync_main -> archive -> cleanup_worktree
```

`push` publishes the implementation branch and opens a pull request with `gh`.
`archive` reconciles the merged OpenSpec change, and `cleanup_worktree` removes
the local implementation worktree when it is safe.
