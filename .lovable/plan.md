

## Plan: Replace PDF Resume with HTML Resume Component

### Summary
Replace the current iframe-based PDF resume viewer with a fully coded HTML/CSS resume component that matches the layout of your attached PDF. The resume will render inside the existing dialog/modal and include a "Download PDF" button using the browser's print-to-PDF functionality.

### What will be built

**1. Create `src/components/ResumePage.tsx`**
A new component that renders your complete resume as styled HTML, matching the PDF layout:
- Header: Name, title bar (Full Stack Software Engineer | Blockchain Developer | Open Source Contributor), contact links
- Sections: Professional Summary, Core Competencies (grid), Key Achievements, Professional Experience (4 roles with dates and bullet points), Featured Projects, Technical Skills, Certifications & Achievements, Education & Training
- Styling: Clean professional layout with section headers using a colored left border accent, proper typography, and responsive scaling inside the modal

**2. Update `src/components/Header.tsx`**
- Replace the `<iframe>` with the new `<ResumePage />` component wrapped in a `<ScrollArea>`
- Replace "Open in new tab" button with a "Download PDF" button that triggers `window.print()` on a hidden print-optimized version
- Keep fullscreen toggle and Escape key behavior

**3. Add print styles to `src/index.css`**
- Add `@media print` rules that hide everything except the resume content
- Ensure proper page breaks, margins, and single-page formatting for PDF output

**4. Update `src/lib/constants.ts`**
- Add your resume data (contact info, experience entries, skills, etc.) as structured constants so the resume component pulls from a single data source

### Technical details

- The resume content will be hardcoded based on the PDF you provided (Dedan Okware's resume)
- Download uses `window.print()` which opens the browser's native print dialog where users can save as PDF
- The `ScrollArea` component (already in the project) will handle scrolling within the modal
- Print CSS will use `@page` rules for proper margins and hide the modal chrome
- The resume will be responsive: full layout in the modal, and properly formatted for print

### Files changed
- `src/components/ResumePage.tsx` (new)
- `src/components/Header.tsx` (modified)
- `src/lib/constants.ts` (modified)
- `src/index.css` (modified)

