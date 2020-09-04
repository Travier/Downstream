@component('mail::message')
# {{ ucfirst($displayName) }} it's been a whole year since you joined!
We want to thank you for being with us in our launch year.
<br /><br />


@component('mail::panel')
## Year in Review

@if($collectionSize)
You collected **{{ $collectionSize }}** items so far @if($collectionReach) and other users collected your items **{{ $collectionReach }}** times @endif!
@else
You joined but didn't collect any items! That's okay, we hope you visit us again soon and collect your first item!
@endif

<br />

Our total collection size is **{{ $network->size }}** items since launch and the discovery system found **{{ $network->related }}** related items.

<br />
@endcomponent

We'll keep adding new features and providing you the best free music platform we can.


<br />

@component('mail::panel')
## New Features we launched this year
- Discover page - A page populated with music or videos related to items in your collection.
- Global Queue - You can now push your favorite music to the frontpage from your collection.
- Player 2.0 - We completely redid how our video-player works which greatly reduced bugs and has allowed us to add new features quickly.

## Things will be working on next year
- Ability to follow friends and other users
- Radio feature similar to Pandora
- Artist accounts and tools for original content to be uploaded
- Better user curated content pages
- Improvements to Mobile Experience
@endcomponent

@component('mail::button', ['url' => 'https://downstream.us'])
Visit Downstream
@endcomponent

Feel free to reply if you have any questions regarding our site.

<br />

Thanks,<br>
{{ config('app.name') }}
@endcomponent
