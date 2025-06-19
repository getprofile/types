# @getprofile/types

**Shared TypeScript definitions for GetProfile AI**  
A standalone package providing type-safe interfaces for the `Profile` data structure, enabling consistency across backend, frontend, and Node.js client codebases.

---

## Installation

```bash
npm install @getprofile/types
# or with yarn
yarn add @getprofile/types
```

---

## Usage

Import your types anywhere:

```ts
import type { Profile, ScoredValue } from "@getprofile/types";

function handleProfile(profile: Profile) {
  console.log(`Profile ${profile.profile_id} status: ${profile.status}`);
}
```

---

## Key Types

### `ScoredValue<T = string>`

Represents a value with associated confidence (0–1):

```ts
export interface ScoredValue<T = string> {
  value: T;
  confidence: number;
}
```

### `Profile`

Comprehensive user profile schema:

- **Metadata**: `profile_id`, `tenant_id`, `status` (`processing` | `summarizing` | `ready`)
- **Core Info**: name, age, gender, etc., each with `ScoredValue`
- **Interest Categories**: hobbies, music, books, etc.
- **Personality**: traits, mood trends
- **Memories**: events with timestamps and importance
- **Preferences**: conversation style, topics to avoid
- **Timestamps**: tracked per section
- **Update Log**: history of changes
- **Dates**: `created_at`, `last_updated` (both `Date`)
- **Optional Summary**

Read full definitions in [`types/Profile.ts`](https://github.com/getprofile/types/blob/main/index.d.ts).

---

## Development & Publishing

1. Clone repo & install dependencies:

   ```bash
   git clone https://github.com/getprofile/types.git
   cd types
   npm install
   ```

2. Publish to npm:

   ```
   npm login
   npm publish --access public
   ```

No build step required, as this package is pure TypeScript.

---

## Contributing

Contributions welcome! Open a PR to refine types, add fields, or improve examples. Please follow project guidelines, include tests (if applicable), and update version/tags upon release.

---

## License

MIT © GetProfile AI
