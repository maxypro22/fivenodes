# Entity checklist — off-site work

These items cannot be done from the codebase. They require someone at Five Nodes
to create accounts and submit information. Each one, once live, gets its URL
added to `sameAs` in `app/layout.jsx`.

**Do not add a URL to `sameAs` before the profile exists.** A 404 in `sameAs`
weakens entity resolution rather than strengthening it.

## Priority 1 — Google Business Profile

- [ ] Claim/verify the Doha listing (3rd Floor, Al Muftah Plaza, Al Reem St)
- [ ] Category: "Software company" + secondary "Business to business service"
- [ ] Real photos of the office and team
- [ ] Hours, phone `+974 3001 0105`, website `https://fivenodes.ai`
- [ ] **Collect genuine reviews** — this is the only legitimate route to the
      "4.8" rating currently shown in the hero. Until real reviews exist,
      do not add `AggregateRating` schema (see the warning in `plane.pdf`).
- [ ] Add the maps URL to `sameAs`

## Priority 2 — Wikidata

- [ ] Create an item for "Five Nodes for Artificial Intelligence"
- [ ] Properties: instance of (business), country (Qatar), headquarters
      location (Doha), official website, industry (artificial intelligence),
      inception date
- [ ] Cite independent sources — Wikidata requires them, and this is the step
      that usually blocks creation. Press coverage or an official registry
      listing works; your own website does not.
- [ ] Add the Q-number URL to `sameAs`

## Priority 3 — Qatari directories

Identical name, address and phone on every one (NAP consistency is the point):

- [ ] Qatar Chamber of Commerce member directory
- [ ] Ministry of Commerce and Industry (MOCI) business listing
- [ ] Qatar Business Directory
- [ ] Qatar Financial Centre / QSTP directories, if eligible
- [ ] Doha startup and tech ecosystem indexes

## Priority 4 — B2B review platforms

Frequently cited by models asked to shortlist vendors:

- [ ] Clutch profile
- [ ] GoodFirms profile
- [ ] G2 listing

## Exact NAP to use everywhere

```
Five Nodes for Artificial Intelligence L.L.C.
3rd Floor, Al Muftah Plaza, Al Reem St, Doha, Qatar
+974 3001 0105
Info@fivenodes.ai
https://fivenodes.ai
```
