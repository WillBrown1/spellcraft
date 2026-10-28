(function(root){
const score=(guess,answer)=>{let result=Array(5).fill('absent'),left=answer.split('');guess.split('').forEach((c,i)=>{if(c===left[i]){result[i]='correct';left[i]=null}});guess.split('').forEach((c,i)=>{if(result[i]==='correct')return;let j=left.indexOf(c);if(j>=0){result[i]='present';left[j]=null}});return result};
const pour=(tubes,from,to)=>{if(from===to||!tubes[from]?.length||!tubes[to]||tubes[to].length===4)return null;let a=tubes[from],b=tubes[to],c=a.at(-1);if(b.length&&b.at(-1)!==c)return null;let n=0;for(let i=a.length-1;i>=0&&a[i]===c;i--)n++;n=Math.min(n,4-b.length);let next=tubes.map(t=>t.slice());next[from].splice(-n);next[to].push(...Array(n).fill(c));return next};
const sorted=t=>t.every(a=>a.length===0||(a.length===4&&a.every(c=>c===a[0])));
const adjacent=(a,b,size=4)=>Number.isInteger(a)&&Number.isInteger(b)&&a>=0&&b>=0&&a<size*size&&b<size*size&&a!==b&&Math.abs(Math.floor(a/size)-Math.floor(b/size))<=1&&Math.abs(a%size-b%size)<=1;
root.Rules={score,pour,sorted,adjacent};if(typeof module!=='undefined')module.exports=root.Rules;
})(typeof window==='undefined'?globalThis:window);
