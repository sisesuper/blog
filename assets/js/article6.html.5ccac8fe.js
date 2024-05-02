"use strict";(self.webpackChunkalgorithm_doc=self.webpackChunkalgorithm_doc||[]).push([[732],{3912:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>k,data:()=>d});var e=a(641);const t={id:"轮转数组",tabindex:"-1"},p={class:"header-anchor",href:"#轮转数组"},o=(0,e.Fv)('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定一个整数数组 <code>nums</code>，将数组中的元素向右轮转 <code>k</code> 个位置，其中 <code>k</code> 是非负数。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><blockquote><p>输入: nums = [1,2,3,4,5,6,7], k = 3</p><p>输出: <code>[5,6,7,1,2,3,4]</code></p><p>解释:</p><p>向右轮转 1 步: <code>[7,1,2,3,4,5,6]</code></p><p>向右轮转 2 步: <code>[6,7,1,2,3,4,5]</code></p><p>向右轮转 3 步: <code>[5,6,7,1,2,3,4]</code></p></blockquote>',4),c={id:"试一试",tabindex:"-1"},l={class:"header-anchor",href:"#试一试"},i={href:"https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Fv)('<h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析"><span>分析</span></a></h3><p><strong>方法一</strong></p><ul><li><p>对 k 就余数，获取净偏移量</p></li><li><p>截取要移除的尾部，添加到数组头部</p></li></ul><p><strong>方法二</strong></p><ul><li><p>对 k 就余数，获取净偏移量</p></li><li><p>在复制一份数组数据，添加到数组尾部</p></li><li><p>根据k截取该数组的中间部分，作为轮转的结果</p></li></ul><h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h3><p><strong>方法一</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        k <span class="token operator">=</span> k <span class="token operator">%</span> nums<span class="token punctuation">.</span>length <span class="token comment">// 获取净偏移量</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">let</span> arr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span>k<span class="token punctuation">)</span> <span class="token comment">// 截取要移除的尾部</span>\n        nums<span class="token punctuation">.</span>length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k <span class="token comment">// 移除尾部</span>\n        nums<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>      <span class="token comment">// 添加到数组头部</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法二</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    k <span class="token operator">=</span> k <span class="token operator">%</span> nums<span class="token punctuation">.</span>length <span class="token comment">// 获取净偏移量</span>\n    <span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length \n    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nums<span class="token punctuation">,</span><span class="token operator">...</span>nums<span class="token punctuation">]</span> <span class="token comment">// 存储两份nums</span>\n\n    arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len <span class="token operator">-</span> k<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> len <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token comment">// 根据k截取该数组的中间部分</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10),r={},k=(0,a(6262).A)(r,[["render",function(n,s){const a=(0,e.g2)("Badge"),r=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("h1",t,[(0,e.Lk)("a",p,[(0,e.Lk)("span",null,[(0,e.eW)("轮转数组 "),(0,e.bF)(a,{text:"简单"})])])]),o,(0,e.Lk)("h3",c,[(0,e.Lk)("a",l,[(0,e.Lk)("span",null,[(0,e.Lk)("a",i,[(0,e.eW)("试一试"),(0,e.bF)(r)])])])]),u])}]]),d=JSON.parse('{"path":"/algorithm/array_string/article6.html","title":"轮转数组","lang":"zh_CN","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"试一试","slug":"试一试","link":"#试一试","children":[]},{"level":3,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":3,"title":"解答","slug":"解答","link":"#解答","children":[]}]}],"git":{"updatedTime":1713262258000,"contributors":[{"name":"颜豪","email":"2825060856@qq.com","commits":2}]},"filePathRelative":"algorithm/array_string/article6.md"}')},6223:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>u,data:()=>r});var e=a(641);const t=(0,e.Fv)('<h1 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和"><span>两数之和</span></a></h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 和为目标值 <code>target</code> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><blockquote><p><strong>输入：</strong> nums = [2,7,11,15], target = 9</p><p><strong>输出：</strong> [0,1]</p><p><strong>解释：</strong> 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。</p></blockquote>',7),p={id:"试一试",tabindex:"-1"},o={class:"header-anchor",href:"#试一试"},c={href:"https://leetcode.cn/problems/two-sum/submissions/526627281?envType=study-plan-v2&envId=top-interview-150",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<h3 id="解答" tabindex="-1"><a class="header-anchor" href="#解答"><span>解答</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">let</span> index <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">!==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span>index<span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),i={},u=(0,a(6262).A)(i,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[t,(0,e.Lk)("h3",p,[(0,e.Lk)("a",o,[(0,e.Lk)("span",null,[(0,e.Lk)("a",c,[(0,e.eW)("试一试"),(0,e.bF)(a)])])])]),l])}]]),r=JSON.parse('{"path":"/algorithm/hash/article6.html","title":"两数之和","lang":"zh_CN","frontmatter":{},"headers":[{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"试一试","slug":"试一试","link":"#试一试","children":[]},{"level":3,"title":"解答","slug":"解答","link":"#解答","children":[]}]}],"git":{"updatedTime":1713938102000,"contributors":[{"name":"颜豪","email":"2825060856@qq.com","commits":1}]},"filePathRelative":"algorithm/hash/article6.md"}')}}]);