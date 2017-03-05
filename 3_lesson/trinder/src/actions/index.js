
export function fetchCandidates(){
  return {
    type: 'FETCH_CANDIDATES',
    payload: initialCandidates
  }
}

export function approveCandidate(candidate) {
  return {
    type: 'APROVE_CANDIDATE',
    payload: candidate
  }
}

export function rejectCandidate(candidate) {
  return {
    type: 'REJECT_CANDIDATE',
    payload: candidate
  }
}

const initialCandidates = [
  {
    id: 1,
    name: 'Kurosaki Ichigo',
    imageUrl: 'http://orig01.deviantart.net/9479/f/2012/178/b/1/ichigo_vaizard_colored_by_chaos_death-d554s1r.png'
  },
  {
    id: 2,
    name: 'Ulquiorra Cifer',
    imageUrl: 'https://i.skyrock.net/5688/43705688/pics/1759972610_small.jpg'
  },
  {
    id: 3,
    name: 'Sosuken Aizen',
    imageUrl: 'http://g01.a.alicdn.com/kf/HTB1rEg6HVXXXXcMXXXXq6xXFXXX2/BLEACH-Aizen-Sousuke-font-b-wooden-b-font-font-b-sword-b-font-Weapon-font-b.jpg'
  }
]
