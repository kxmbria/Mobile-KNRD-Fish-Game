const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Dictionary,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.time,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{BG: 0},
	{Person: 0},
	{NextWiggleTime: 0},
	{Clickable: 0},
	{Bobber: 0},
	{Sine: 0},
	{fish: 0},
	{YouveCaught: 0},
	{Cast: 0},
	{CastAgain: 0},
	{Touch: 0},
	{FishTextDict: 0},
	{MoreInfo: 0},
	{INFO: 0},
	{Sprite: 0},
	{RandomIndex: 0},
	{ReelProgress: 0},
	{IsReeling: 0}
];

self.InstanceType = {
	BG: class extends self.ISpriteInstance {},
	Person: class extends self.ISpriteInstance {},
	Bobber: class extends self.ISpriteInstance {},
	fish: class extends self.ISpriteInstance {},
	YouveCaught: class extends self.ITextInstance {},
	Cast: class extends self.ITextInstance {},
	CastAgain: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	FishTextDict: class extends self.IDictionaryInstance {},
	MoreInfo: class extends self.ITextInstance {},
	INFO: class extends self.IDictionaryInstance {},
	Sprite: class extends self.ISpriteInstance {}
}