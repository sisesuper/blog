"use strict";(self.webpackChunkalgorithm_doc=self.webpackChunkalgorithm_doc||[]).push([[437],{3336:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>k,data:()=>d});var e=a(641);const t={id:"跳跃游戏",tabindex:"-1"},p={class:"header-anchor",href:"#跳跃游戏"},o=(0,e.Fv)('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给你一个非负整数数组 <code>nums</code> ，你最初位于数组的 <strong>第一个下标</strong> 。数组中的每个元素代表你在该位置可以跳跃的最大长度。</p><p>判断你是否能够到达最后一个下标，如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><blockquote><p>输入：nums = [2,3,1,1,4]</p><p>输出：true</p><p>解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。</p></blockquote>',5),c={id:"试一试",tabindex:"-1"},l={class:"header-anchor",href:"#试一试"},i={href:"https://leetcode.cn/problems/jump-game/submissions/521345480?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Fv)('<h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h3><ul><li><p>遍历nums</p></li><li><p>维护一个<code>maxPosition</code> ，作为走到第 <code>i</code> 步之前，能跳到的最远距离</p></li><li><p>当来到新的数组元素时，先判断 <code>maxPosition</code> 是否能支持跳到第 <code>i</code> 个元素</p></li><li><p>比较历史最远距离 <code>maxPosition</code> 和当前这一步能跳到的距离 <code>i+nums[i]</code> ,更新 <code>maxPosition</code></p></li><li><p>如果 <code>maxPosition</code> 能到达或超过终点，即为成功</p></li></ul><h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> maxPosition <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// 走到第i步之前，能跳到的最远距离</span>\n        <span class="token keyword">let</span> totalLength <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 终点的距离</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxPosition <span class="token operator">&lt;</span> i<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// maxPosition不否能支持跳到第i个元素</span>\n            maxPosition <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPosition<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//更新maxPosition</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>maxPosition <span class="token operator">&gt;=</span> totalLength<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// maxPosition能到达或超过终点，即为成功</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),r={},k=(0,a(6262).A)(r,[["render",function(n,s){const a=(0,e.g2)("Badge"),r=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("h1",t,[(0,e.Lk)("a",p,[(0,e.Lk)("span",null,[(0,e.eW)("跳跃游戏 "),(0,e.bF)(a,{text:"中等",type:"warning"})])])]),o,(0,e.Lk)("h3",c,[(0,e.Lk)("a",l,[(0,e.Lk)("span",null,[(0,e.Lk)("a",i,[(0,e.eW)("试一试"),(0,e.bF)(r)])])])]),u])}]]),d=JSON.parse('{"path":"/algorithm/array_string/article9.html","title":"跳跃游戏","lang":"zh_CN","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"试一试","slug":"试一试","link":"#试一试","children":[]},{"level":3,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":3,"title":"解答","slug":"解答","link":"#解答","children":[]}]}],"git":{"updatedTime":1713432413000,"contributors":[{"name":"颜豪","email":"2825060856@qq.com","commits":2}]},"filePathRelative":"algorithm/array_string/article9.md"}')},7557:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>u,data:()=>r});var e=a(641);const t=(0,e.Fv)('<h1 id="最长连续序列" tabindex="-1"><a class="header-anchor" href="#最长连续序列"><span>最长连续序列</span></a></h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定一个未排序的整数数组 <code>nums</code> ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。</p><p>请你设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><blockquote><p><strong>输入：</strong> nums = [100,4,200,1,3,2]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 最长数字连续序列是 <code>[1, 2, 3, 4]。它的长度为 4。</code></p></blockquote>',6),p={id:"试一试",tabindex:"-1"},o={class:"header-anchor",href:"#试一试"},c={href:"https://leetcode.cn/problems/longest-consecutive-sequence/submissions/527254484?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">longestConsecutive</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                preLength <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>\n                afterLength <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span>\n                currentLength <span class="token operator">=</span> preLength <span class="token operator">+</span> afterLength <span class="token operator">+</span> <span class="token number">1</span>\n                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span>\n                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> preLength<span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span>\n                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> afterLength<span class="token punctuation">,</span> currentLength<span class="token punctuation">)</span>\n                max <span class="token operator">=</span> max <span class="token operator">&gt;</span> currentLength <span class="token operator">?</span> max <span class="token operator">:</span> currentLength\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> max\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),i={},u=(0,a(6262).A)(i,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[t,(0,e.Lk)("h3",p,[(0,e.Lk)("a",o,[(0,e.Lk)("span",null,[(0,e.Lk)("a",c,[(0,e.eW)("试一试"),(0,e.bF)(a)])])])]),l])}]]),r=JSON.parse('{"path":"/algorithm/hash/article9.html","title":"最长连续序列","lang":"zh_CN","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"试一试","slug":"试一试","link":"#试一试","children":[]},{"level":3,"title":"解答","slug":"解答","link":"#解答","children":[]}]}],"git":{"updatedTime":1714107483000,"contributors":[{"name":"颜豪","email":"2825060856@qq.com","commits":1}]},"filePathRelative":"algorithm/hash/article9.md"}')}}]);