const Constants = {
  PlotTypes: {
    'REFERENCE_STAND':'REFERENCE_STAND',
    'FIXED_RADIUS_PLOT':'FIXED_RADIUS_PLOT',
  },
  LocalStorageKeys: {
    'SELECTION_PARAMS':'SELECTION_PARAMS',
    'TREE_QUERY_RESULTS':'TREE_QUERY_RESULTS',
  },
}
Object.freeze(Constants);

const DataLists = {
  SpeciesList: {
    'ABAM':   'Abies amabilis(Pacific silver fir)',
    'ABCO':   'Abies concolor(white fir)',
    'ABGR':   'Abies grandis(grand fir)',
    'ABLA':   'Abies lasiocarpa(subalpine fir)',
    'ABMA':   'Abies magnifica(Shasta red fir)',
    'ABPR':   'Abies procera(noble fir)',
    'ACGL':   'Acer glabrum(Rocky Mtn maple)',
    'ACMA3':  'Acer macrophyllum(bigleaf maple)',
    'ALRU2':  'Alnus rubra(red alder)',
    'ALVIS':  'Alnus viridis ssp sinuata(Sitka alder)',
    'ARME':   'Arbutus menziesii(Pacific madrone)',
    'CHCH7':  'Chrysolepis chrysophylla(golden chinquapin)',
    'CADE27': 'Calocedrus decurrens(incense cedar)',
    'CANO9':  'Callitropsis nootkatensis(Alaska yellow cedar)',
    'CONU4':  'Cornus nuttalli(Pacific dogwood)',
    'FRPU7':  'Frangula purshiana(Cascara buckthorn)',
    'PICO':   'Pinus contorta(Lodgepole pine)',
    'PIEN':   'Picea engelmanii(Engelmnn spruce)',
    'PILA':   'Pinus lambertiana(sugar pine)',
    'PIMO3':  'Pinus monticola(w.white pine)',
    'PIPO':   'Pinus ponderosa(ponderosa pine)',
    'PISI':   'Picea sitchensis(Sitka spruce)',
    'POBAT':  'Populus balsamifer v.trich. (black cottonwood)',
    'PREM':   'Prunus emarginata(bitter cherry)',
    'PRUNU':  'Prunus spp. (cherry)',
    'PSME':   'Pseudotsuga menziesii(Douglas-fir)',
    'QUGA4':  'Quercus garryana(Oregon white oak)',
    'QUKE':   'Quercus kelloggii(California black oak)',
    'TABR2':  'Taxus brevifolia(Pacific yew)',
    'THPL':   'Thuja plicata(western redcedar)',
    'TSHE':   'Tsuga heterophylla(western hemlock)',
    'TSME':   'Tsuga mertensiana(mountain hemlock)',
  },
  StatusList:{
    1: '1 - Alive',
    2: '2 - Ingrowth',
    3: '3 - Fused at DBH',
    6: '6 - Dead',
    9: '9 - Not found',
  },
  CanopyClassList:{
    'S': 'S - Suppressed',
    'I': 'I - Intermediate',
    'C': 'C - Co-dominant',
    'D': 'D - Dominant',
  },
  TreeVigorList:{
    1: '1 - Good',
    2: '2 - Fair',
    3: '3 - Poor',
  },
  MainStemList:{
    1: '1 - Main stem intact',
    2: '2 - Broken above root collar',
    3: '3 - Broken below root collar',
  },
  RootingList:{
    1: '1 - Fully rooted',
    2: '2 - Partially rooted',
    3: '3 - Uprooted',
  },
  CommentList:{
    'Bark_slough':     'Bark sloughing',
    'BlScrp':          'Bole Scrape/Scar',
    'BlSnp':           'Bole Snap',
    'BrknTp':          'Broken Top',
    'Brown_needles':   'Brown needles present',
    'BttSwl':          'Butt Swell',
    'Burls':           'Burls',
    'CHKLOC':          'Check Location',
    'CHKSPP':          'Check Species ID',
    'Cnks':            'Conks Present',
    'Crook':           'Crook in Stem',
    'DDC':             'Diameter Double Checked',
    'DdTp':            'Dead Top',
    'DwrfMstl':        'Dwarf Mistletoe',
    'EpBr':            'Epicormic Branching',
    'FltTp':           'Flat Top',
    'Frass':           'Frass',
    'FrkTp':           'Forked Top',
    'GNA':             'Guide Nails Added',
    'Hit_by_snag':     'Hit by snag',
    'Hit_by_tree':     'Hit by live tree',
    'Insect_holes':    'Insect holes in bark',
    'JointDBH':        'Two Trees Measured Together',
    'Log_against_it':  'Log pressed against it',
    'LRR':             'Laminated Root Rot',
    'MeasSwell':       'DBH measure includes swelling',
    'MOX':             'Measured perpend.to lean',
    'NEWLOC':          'New Location',
    'NFAS':            'Not Found After Search',
    'NNT':             'Needs New Tag',
    'No_comment':      'Void',
    'On_nurse_log':    'On nurse log',
    'Phellinus_pini':  'Phellinus pini',
    'PistlButt':       'Pistol butt',
    'Pitch_sheets':    'Pitch sheets',
    'Pitch_tubes':     'Pitch tubes',
    'PrevTagATD':      'Prev tagged, add to database',
    'ReitLdr':         'Reiterated leader',
    'Rot_in_bole':     'Rot in bole',
    'Sapsucker_holes': 'Sapsucker holes',
    'Sawdust':         'Sawdust',
    'Sparse_crown':    'Sparse crown',
    'StemSwp':         'Stem Sweep',
    'Stilt-rooted':    'Stilt-rooted',
    'SweepVert':       'Sweeps to vertical',
    'T_NBH':           'Tag Nailed at Breast height',
    'TF_NEstHt':       'Tag Found, Nailed at Estimated Breast Height',
    'TF_NPrevHt':      'Tag Found, Nailed at Previous Height',
    'TgRepl':          'Tag Replaced',
    'TNF_NEstHt':      'Tag not found, temp tag at EstHt',
    'WtchBrm':         'Witches\' Broom Present',
  },
  ConditionList:{
    1:  '1 - Green needles or leaves present',
    2:  '2 - Dead needles or leaves present',
    3:  '3 - Bark sloughing',
    4:  '4 - Tree dead several years',
    11: '11 - Crown flat- topped',
    12: '12 - Evidence of earlier loss of part of crown',
    13: '13 - Spike top/ top dieback',
    14: '14 - Crown stripped by falling tree or snag',
    21: '21 - Rot at break',
    22: '22 - Top not found',
    41: '41 - Pitch tubes on bole',
    42: '42 - Beetle galleries',
    43: '43 - Insect frass',
    51: '51 - Conks(indicate type and position)',
    52: '52 - Rot(indicate type and position)',
    53: '53 - Tree hollow',
    54: '54 - Pitch sheets',
    55: '55 - Oozing wounds',
    56: '56 - Mistletoe plants observed',
    60: '60 - Witches brooms',
    71: '71 - Scarring of bole(note cause, location)',
    72: '72 - Girdling(note cause)',
    73: '73 - Woodpecker / Sapsucker activity',
  },
  ProximatePredisposingList:{
    1:	'1 - Suppression',
    2:	'2 - Previously noted injury/ damage',
    10:	'10 - Known pathogen(note which)',
    11:	'11 - Mistletoe',
    12:	'12 - Bark insect(note which if known)',
    13:	'13 - Defoliating insect(note if known)',
    14:	'14 - Unknown pathogen',
    20:	'20 - Windthrow',
    21:	'21 - Co - opted windthrow from rootplate',
    22:	'22 - Windsnap',
    23:	'23 - Broken top(note cause if known)',
    24:	'24 - Hit / crushed by fallen GREEN tree/ limb',
    30:	'30 - Hit / crushed by fallen DEAD tree / limb',
    31:	'31 - Lightning',
    32:	'32 - Animal kill(note animal if known)',
    33:	'33 - Snow / ice breakage or crushing',
    34:	'34 - Mechanical failure / collapse of stem',
    40:	'40 - Fire',
    50:	'50 - Other(comment on nature of cause)',
    60:	'60 - Unknown',
    70:	'70 - Physically removed from plot',
  },
  MortalityCommentList:{
    'Laminated root rot (Coniferiporia sulphurascens)': 'Laminated root rot (Coniferiporia sulphurascens)',
    'Mountain pine beetle (Dendroctonus pond.)':        'Mountain pine beetle (Dendroctonus pond.)',
    'Stem rot (Phellinus pini)':                        'Stem rot (Phellinus pini)',
    'Top not found':                                    'Top not found',
    'Velvet top butt rot (Phaeolus schweinitzii)':      'Velvet top butt rot (Phaeolus schweinitzii)',
  },
}
Object.freeze(DataLists);
